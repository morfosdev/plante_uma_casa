
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getCtData, testVarType } from "../../project";

type Tprops = {
  args: any;
  pass: {
    arrFiles: any[];
    arrFuncs?: Array<(a: any, urls: string[], idx?: number) => any>;
  };
};

// --- helpers
const safeName = (name: string) =>
  (name || "file.bin").replace(/[^w.-]+/g, "_").slice(-150);

const extFromMime = (mime?: string) =>
  mime && mime.indexOf("/") !== -1 ? "." + mime.split("/")[1] : "";

async function toBlobAndName(
  input: any,
  idx: number
): Promise<{ blob: Blob; name: string }> {
  // WEB: File/Blob real
  if (input instanceof Blob) {
    const name =
      (input as any).name ||
      "upload_" +
        Date.now() +
        "_" +
        idx +
        (extFromMime((input as any).type) || ".bin");
    return { blob: input, name: safeName(name) };
  }

  // NATIVO: { uri, fileName?, mimeType? }
  if (input && typeof input === "object" && typeof input.uri === "string") {
    const res = await fetch(input.uri);
    const blob = await res.blob();
    const name =
      input.fileName ||
      "upload_" +
        Date.now() +
        "_" +
        idx +
        (extFromMime(input.mimeType || blob.type) || ".bin");
    return { blob, name: safeName(name) };
  }

  // STRING (blob:/file:/content:/http:)
  if (typeof input === "string") {
    const res = await fetch(input);
    const blob = await res.blob();
    const name =
      "upload_" + Date.now() + "_" + idx + (extFromMime(blob.type) || ".bin");
    return { blob, name: safeName(name) };
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

  // --- faz upload de cada imagem e guarda as URLs
  const condDirectory = arrFiles.some((item) => item.includes("documents"));
  const condPath = condDirectory ? "documents/" : "images/";
  const results = await Promise.all(
    inputs.map(async (currData: any, idx: number) => {
      try {
        const data = await toBlobAndName(currData, idx);
        const blob = data.blob;
        const name = data.name;
        const path = condPath + Date.now() + "_" + idx + "_" + name;
        const fileRef = ref(storage, path);

        await uploadBytes(fileRef, blob);
        const url = await getDownloadURL(fileRef);

        console.log("upload ok:", { idx, path, url });
        return { ok: true, idx: idx, url: url, path: path };
      } catch (err) {
        console.error("falha no upload:", idx, err);
        return { ok: false, idx: idx, error: String(err) };
      }
    })
  );

  // --- coleta somente as URLs válidas
  const urls = results.filter((r) => r.ok).map((r) => r.url);
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

