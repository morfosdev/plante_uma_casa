
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getCtData, testVarType } from "../../project";

// --- tipos auxiliares
type TUrlInfo = {
  receiptUrl: string;
  fileName: string;
};

type TUploadSuccess = {
  ok: true;
  idx: number;
  url: string;
  path: string;
  name: string; // nome salvo (safeName + prefixos)
  originalName: string | null; // nome original do arquivo (quando existir)
};

type TUploadError = {
  ok: false;
  idx: number;
  error: string;
};

type TUploadResult = TUploadSuccess | TUploadError;

type Tprops = {
  args: any;
  pass: {
    arrFiles: any[];
    // agora arrFuncs recebe um array de TUrlInfo
    arrFuncs?: Array<(a: any, urls: TUrlInfo[], idx?: number) => any>;
  };
};

// --- helpers
const safeName = (name: string) =>
  (name || "file.bin").replace(/[^w.-]+/g, "_").slice(-150);

const extFromMime = (mime?: string) =>
  mime && mime.indexOf("/") !== -1 ? "." + mime.split("/")[1] : "";

// sempre retorna blob + nome salvo + nome original (se existir)
async function toBlobAndName(
  input: any,
  idx: number
): Promise<{ blob: Blob; name: string; originalName: string | null }> {
  // WEB: File real
  if (input instanceof File) {
    const originalName = input.name || null;
    const name =
      originalName ||
      "upload_" +
        Date.now() +
        "_" +
        idx +
        (extFromMime((input as any).type) || ".bin");
    return { blob: input, name: safeName(name), originalName };
  }

  // WEB: Blob sem nome
  if (input instanceof Blob) {
    const genName =
      "upload_" +
      Date.now() +
      "_" +
      idx +
      (extFromMime((input as any).type) || ".bin");
    return { blob: input, name: safeName(genName), originalName: null };
  }

  // NATIVO: { uri, fileName?, mimeType? }
  if (input && typeof input === "object" && typeof input.uri === "string") {
    const res = await fetch(input.uri);
    const blob = await res.blob();
    const originalName: string | null = input.fileName || null;
    const name =
      originalName ||
      "upload_" +
        Date.now() +
        "_" +
        idx +
        (extFromMime(input.mimeType || blob.type) || ".bin");
    return { blob, name: safeName(name), originalName };
  }

  // STRING (blob:/file:/content:/http:)
  if (typeof input === "string") {
    const res = await fetch(input);
    const blob = await res.blob();
    const genName =
      "upload_" + Date.now() + "_" + idx + (extFromMime(blob.type) || ".bin");
    return { blob, name: safeName(genName), originalName: null };
  }

  throw new Error("Formato de arquivo não suportado");
}

export const uploadFileTool = async (props: Tprops) => {
  console.log("UPLOAD DE ARQUIVOS");
  const { args, pass } = props;
  const { arrFiles, arrFuncs } = pass || {};
  console.log({ arrFiles, arrFuncs });

  if (!arrFiles || !arrFiles.length) return [];

  const resolved = arrFiles.map((v) => testVarType(v, args));
  const inputs: any[] = Array.isArray(resolved[0]) ? resolved[0] : resolved;
  console.log("inputs normalizados:", inputs);

  const fbInit = getCtData("all.temp.fireInit");
  const storage = getStorage(fbInit);

  // --- faz upload de cada arquivo e guarda as URLs
  const condDirectory = arrFiles.some(
    (item) => typeof item === "string" && item.includes("documents")
  );
  const condPath = condDirectory ? "documents/" : "images/";

  const results: TUploadResult[] = await Promise.all(
    inputs.map(async (currData: any, idx: number): Promise<TUploadResult> => {
      try {
        const data = await toBlobAndName(currData, idx);
        console.log("blob pronto:", { idx, data });

        const blob = data.blob;
        const name = data.name;
        const path = condPath + Date.now() + "_" + idx + "_" + name;
        const fileRef = ref(storage, path);

        await uploadBytes(fileRef, blob);
        const url = await getDownloadURL(fileRef);

        console.log("upload ok:", {
          idx,
          path,
          url,
          nameSalvo: name,
          originalName: data.originalName,
        });

        return {
          ok: true,
          idx,
          url,
          path,
          name,
          originalName: data.originalName,
        };
      } catch (err) {
        console.error("falha no upload:", idx, err);
        return { ok: false, idx, error: String(err) };
      }
    })
  );

  // --- coleta somente as URLs válidas
  const urls: TUrlInfo[] = results
    .filter((r): r is TUploadSuccess => r.ok === true)
    .map((r) => ({
      receiptUrl: r.url,
      // exibe o nome original se existir, senão o nome salvo
      fileName: r.originalName || r.name,
    }));

  console.log("URLs finais:", urls);

  // --- chama funções externas APÓS todos os uploads
  if (arrFuncs && arrFuncs.length) {
    for (const fn of arrFuncs) {
      await fn(args, urls);
    }
  }

  console.log("Resultados:", results);
  return results;
};
