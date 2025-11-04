
// ---------- import Packs
import * as DocumentPicker from "expo-document-picker";
import React from "react";
import * as RN from "react-native";

type Tprops = {
  pass: {
    variable?: string[]; // lista inicial de URIs - só UI
    childrenItems?: any[]; // não usado
    arrFuncs?: Array<(payload: any, args?: any) => any | Promise<any>>; // callbacks que recebem FILES/ASSETS
    args?: any; // args repassados aos callbacks
    onChange?: (uris: string[]) => void; // callback UI com as URIs
    max?: number; // limite de itens
  };
};

export const BtnDocumentPicker = (props: Tprops) => {
  const isWeb = RN.Platform.OS === "web";
  return isWeb ? <BtnWeb {...props} /> : <BtnNat {...props} />;
};

/* ---------------- WEB ---------------- */
const BtnWeb = ({ pass }: Tprops) => {
  const { variable = [], onChange, max, arrFuncs, args } = pass || {};
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // UI
  const [docUris, setDocUris] = React.useState<string[]>(variable);
  const [docNames, setDocNames] = React.useState<string[]>([]);
  // Upload: Files reais
  const [files, setFiles] = React.useState<File[]>([]);

  // Dispara callbacks sempre que os FILES mudam
  React.useEffect(() => {
    if (arrFuncs) for (const fn of arrFuncs) fn(files, args);
    // revoke das URLs quando componente desmontar
    return () =>
      docUris.forEach((u) => u.startsWith("blob:") && URL.revokeObjectURL(u));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const pickWeb = () => inputRef.current?.click();

  const handleWebFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Document Picker - Web - Selected files", event.target.files);
    const fl = event.target.files;
    if (!fl) return;

    const newFiles = Array.from(fl);
    // usamos blob URLs como "preview" (e também servem pra leitura upload, se quiser)
    const newUris = newFiles.map((f) => URL.createObjectURL(f));
    const newNames = newFiles.map((f) => f.name);

    const nextUris = max
      ? [...docUris, ...newUris].slice(0, max)
      : [...docUris, ...newUris];
    const nextFiles = max
      ? [...files, ...newFiles].slice(0, max)
      : [...files, ...newFiles];
    const nextNames = max
      ? [...docNames, ...newNames].slice(0, max)
      : [...docNames, ...newNames];

    setDocUris(nextUris);
    setFiles(nextFiles);
    setDocNames(nextNames);
    onChange?.(nextUris);

    // permitir re-selecionar os mesmos arquivos
    event.target.value = "";
  };

  const removeAt = (idx: number) => {
    const uris = [...docUris];
    const fls = [...files];
    const nms = [...docNames];

    const [rm] = uris.splice(idx, 1);
    fls.splice(idx, 1);
    nms.splice(idx, 1);

    if (rm?.startsWith("blob:")) URL.revokeObjectURL(rm);

    setDocUris(uris);
    setFiles(fls);
    setDocNames(nms);
    onChange?.(uris);
  };

  return (
    <>
      <RN.View style={styles.container}>
        <ThumbGrid documents={docUris} names={docNames} onRemove={removeAt} />

        {!docUris && (
          <>
            <RN.Text style={styles.title}>Adicionar Documentos</RN.Text>
            <RN.Text style={styles.subtitle}>
              Selecione arquivos PDF, Word ou TXT
            </RN.Text>
          </>
        )}

        <RN.Pressable style={styles.btn} onPress={pickWeb}>
          <RN.Text style={styles.btnTxt}>Adicionar</RN.Text>
        </RN.Pressable>
      </RN.View>

      <input
        ref={inputRef}
        type="file"
        // Somente documentos
        accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
        multiple
        style={{ display: "none" }}
        onChange={handleWebFile}
      />
    </>
  );
};

/* --------------- NATIVO --------------- */
const BtnNat = ({ pass }: Tprops) => {
  const { variable = [], onChange, max, arrFuncs, args } = pass || {};

  // UI: URIs e nomes
  const [docUris, setDocUris] = React.useState<string[]>(variable);
  const [docNames, setDocNames] = React.useState<string[]>([]);
  // Upload: objetos do DocumentPicker
  const [assets, setAssets] = React.useState<
    Array<{ uri: string; name?: string; mimeType?: string; size?: number }>
  >([]);

  // Dispara callbacks sempre que os ASSETS mudam
  React.useEffect(() => {
    if (arrFuncs) for (const fn of arrFuncs) fn(assets, args);
    return () => {
      /* nada a revogar no nativo */
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assets]);

  const pickNative = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      multiple: true,
      type: [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ],
      copyToCacheDirectory: true,
    });

    if (!result.canceled) {
      const newUris = result.assets.map((a) => a.uri);
      const newNames = result.assets.map((a) => a.name ?? "Documento");

      const nextUris = max
        ? [...docUris, ...newUris].slice(0, max)
        : [...docUris, ...newUris];
      const nextNames = max
        ? [...docNames, ...newNames].slice(0, max)
        : [...docNames, ...newNames];

      const newAssets = result.assets.map((a) => ({
        uri: a.uri,
        name: a.name,
        mimeType: a.mimeType,
        size: a.size,
      }));
      const nextAssets = max
        ? [...assets, ...newAssets].slice(0, max)
        : [...assets, ...newAssets];

      setDocUris(nextUris); // UI
      setDocNames(nextNames); // nomes
      setAssets(nextAssets); // Upload
      onChange?.(nextUris);
    }
  };

  const removeAt = (idx: number) => {
    const uris = [...docUris];
    const ats = [...assets];
    const nms = [...docNames];

    uris.splice(idx, 1);
    ats.splice(idx, 1);
    nms.splice(idx, 1);

    setDocUris(uris);
    setAssets(ats);
    setDocNames(nms);
    onChange?.(uris);
  };

  return (
    <RN.View style={styles.container}>
      <ThumbGrid documents={docUris} names={docNames} onRemove={removeAt} />

      {!docUris && (
        <>
          <RN.Text style={styles.title}>Adicionar Documentos</RN.Text>
          <RN.Text style={styles.subtitle}>
            Selecione arquivos PDF, Word ou TXT
          </RN.Text>
        </>
      )}

      <RN.Pressable style={styles.btn} onPress={pickNative}>
        <RN.Text style={styles.btnTxt}>Adicionar</RN.Text>
      </RN.Pressable>
    </RN.View>
  );
};

/* ------- Grade de miniaturas reutilizável ------- */
const ThumbGrid = ({
  documents,
  names,
  onRemove,
}: {
  documents: string[];
  names?: string[];
  onRemove: (idx: number) => void;
}) => {
  if (!documents.length) return null;
  return (
    <RN.View style={thumb.grid}>
      <RN.Text style={thumb.xTxt2}>Nome do Arquivo</RN.Text>
      {documents.map((uri, idx) => (
        <RN.View key={uri + idx} style={thumb.item}>
          {/* Nome do documento */}
          <RN.View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <RN.Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{ fontWeight: "700", fontSize: 12, textAlign: "center" }}
            >
              {names?.[idx] ?? "Documento"}
            </RN.Text>
          </RN.View>

          {/* Botão remover */}
          <RN.Pressable
            hitSlop={8}
            style={thumb.x}
            onPress={() => onRemove(idx)}
          >
            <RN.Text style={thumb.xTxt}>×</RN.Text>
          </RN.Pressable>
        </RN.View>
      ))}
    </RN.View>
  );
};

/* ---------------- STYLES ---------------- */
const styles = RN.StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 180,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderColor: "#D5DBE3",
    borderRadius: 12,
    borderWidth: 2,
    padding: 20,
    gap: 16,
    backgroundColor: "#fff",
  },
  title: { fontSize: 18, fontWeight: "700", textAlign: "center" },
  subtitle: { fontSize: 14, textAlign: "center", color: "#4B5563" },
  btn: {
    backgroundColor: "#E8EDF5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    height: 36,
    paddingHorizontal: 16,
  },
  btnTxt: { fontSize: 14, fontWeight: "700" },
});

const thumb = RN.StyleSheet.create({
  grid: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 10,
    rowGap: 10,
    borderWidth: 2,
    borderColor: "#E5E7EB",
    padding: 8,
    marginBottom: 8,
  },
  item: {
    position: "relative",
    width: "45%",
    aspectRatio: 1.6,
    borderRadius: 6,
    overflow: "hidden",
  },
  img: { width: "100%", height: "100%" },
  x: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  xTxt: { color: "#fff", fontSize: 16, lineHeight: 16, fontWeight: "700" },
  xTxt2: { fontSize: 14, lineHeight: 16 },
});

