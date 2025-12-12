() => {
  console.log("Botão Recibo", args);

  // ===== item =====
  const item = tools?.findFlatItem ? tools.findFlatItem(args) : null;
  if (!item || typeof item !== "object") {
    console.log("Botão Recibo ERRO: item inválido", item);
    return (
      <RN.Pressable>
        <RN.Text style={{ color: "#CCCCCC", fontSize: 14, fontWeight: "bold" }}>
          ↪
        </RN.Text>
      </RN.Pressable>
    );
  }
  console.log("Botão Recibo 2", item);

  // ===== installmentId =====
  const installmentId = item?.installmentId;
  console.log("Botão Recibo 3", installmentId);

  // Só considera inválido se for null/undefined/string vazia
  if (
    installmentId === null ||
    installmentId === undefined ||
    installmentId === ""
  ) {
    console.log("Botão Recibo ERRO: installmentId inválido");
    return (
      <RN.Pressable>
        <RN.Text style={{ color: "#CCCCCC", fontSize: 14, fontWeight: "bold" }}>
          ↪
        </RN.Text>
      </RN.Pressable>
    );
  }

  // ===== receipts =====
  const receipts = tools?.getCtData
    ? tools.getCtData("sc.A9.currents.currLoteData.receipts")
    : null;

  const safeReceipts = receipts && typeof receipts === "object" ? receipts : {};

  console.log("Botão Recibo 4", safeReceipts);

  // ===== currReceipt =====
  const currReceipt =
    safeReceipts &&
    Object.prototype.hasOwnProperty.call(safeReceipts, installmentId)
      ? safeReceipts[installmentId]
      : null;

  console.log("Botão Recibo 5", currReceipt);

  // ===== receiptUrl =====
  const receiptUrl =
    currReceipt && typeof currReceipt === "object"
      ? currReceipt.receiptUrl || null
      : null;
  const fileName =
    currReceipt && typeof currReceipt === "object"
      ? currReceipt.fileName || "recibo"
      : "recibo";

  console.log("Botão Recibo 6", receiptUrl);

  // ===== estilo condicionado =====
  const condStyle = {
    color: receiptUrl ? "#315e2d" : "#CCCCCC",
    fontSize: 14,
    fontWeight: "bold",
  };

  // ===== função de download (web) =====
//   const baixarRecibo = (url) => {
//     if (!url || typeof url !== "string") return;
//     try {
//       window.open(url, "_blank");
//     } catch (err) {
//       console.log("Erro ao abrir URL do recibo:", err);
//     }
//   };
  const handleDownload = (uri: string, filename: string) => {
    if (!uri) return;

    if (RN.Platform.OS === "web" && typeof document !== "undefined") {
      const link = document.createElement("a");
      link.href = uri;
      link.download = filename || "imagem" + '.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    RN.Linking.openURL(uri);
  };

  // ===== retorno =====
  return (
    <RN.Pressable
      onPress={() => {
        console.log("Clicou no botão de recibo");
        if (receiptUrl) handleDownload(receiptUrl, fileName);
      }}
    >
      <RN.Text style={condStyle}>↪</RN.Text>
    </RN.Pressable>
  );
}