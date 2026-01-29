import * as admin from "firebase-admin";

// Inicializa o Admin SDK uma única vez
if (!admin.apps.length) {
  admin.initializeApp();
}

// Re-exporta os módulos de cada “feature”
export * from "./setWebPush";
// export * from "./outraFeature";
// export * from "./webhooks";
// ...
