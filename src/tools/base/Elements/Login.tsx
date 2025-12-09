
import JSON5 from "json5";
import React from "react";
import * as RN from "react-native";

// ---------- import Packs
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithPopup,
  signInWithRedirect,
  type Auth,
} from "firebase/auth";
import { useData } from "../../..";

// Finaliza sessoes pendentes (necessario para Web/Expo)
WebBrowser.maybeCompleteAuthSession();

type TLoginFunc = (data: any, args?: any) => any;

type TLoginConfigs = {
  btnStyle?: RN.StyleProp<RN.ViewStyle>;
  txtStyle?: RN.StyleProp<RN.TextStyle>;
  txtLabel?: string;
};

type TLoginPass = {
  arrFuncs?: TLoginFunc[];
  configs?: TLoginConfigs | string | any[];
  args?: any;
};

type TProps = {
  pass?: TLoginPass;
};

// ---------- IDs do Google OAuth por plataforma (preencha!)
const IOS_CLIENT_ID = "";
const ANDROID_CLIENT_ID =
  "1099098264007-thb39j1g2ilg74mvrquruu01iaifj9e1.apps.googleusercontent.com";

const getFirebaseApp = (): FirebaseApp | null => {
  const state = useData.getState();
  const rawInit = state?.all?.temp?.fireInit ?? state?.all?.fireInit;
  const appFromState = Array.isArray(rawInit) ? rawInit[0] : rawInit;
  if (appFromState) return appFromState;

  const rawConfig = state?.all?.temp?.fireConfig ?? state?.all?.fireConfig;
  if (!rawConfig) return null;

  const already = getApps();
  if (already.length) return already[0];

  return initializeApp(rawConfig);
};

const normalizeConfigs = (rawConfigs: TLoginPass["configs"]): TLoginConfigs => {
  let parsed: any = rawConfigs;

  if (Array.isArray(parsed)) parsed = parsed[0];

  if (typeof parsed === "string") {
    try {
      parsed = JSON5.parse(parsed.trim());
    } catch (err) {
      console.warn("[LoginWeb] configs parse error:", err);
      parsed = {};
    }
  }

  return parsed && typeof parsed === "object" && !Array.isArray(parsed)
    ? parsed
    : {};
};

// =========================================
// Componente: Login para Nativo (Android/iOS)
// =========================================
export const LoginNative = (_props: { pass?: TLoginPass }) => {
  const [loading, setLoading] = React.useState(false);
  const pass = _props?.pass ?? {};

  // Somente Android nativo
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    selectAccount: true,
  });

  React.useEffect(() => {
    const run = async () => {
      if (!response) return;

      setLoading(false);

      if (response.type === "success") {
        try {
          const idToken = response.params?.id_token;
          console.log("[LoginAndroid] id_token:", idToken);

          const fbApp = getFirebaseApp();
          if (!fbApp) {
            console.error("[LoginAndroid] Firebase app não encontrado.");
            return;
          }

          const auth = getAuth(fbApp);

          const credential = GoogleAuthProvider.credential(idToken);

          const result = await signInWithCredential(auth, credential);
          console.log("[LoginAndroid] Firebase user:", result.user);

          // salva no banco
          const dbResult = await setUserDB(result.user, auth);
          if (dbResult.status !== "success") {
            throw new Error(dbResult.message);
          }

          // executa callbacks
          const arrFuncs = Array.isArray(pass.arrFuncs) ? pass.arrFuncs : [];
          for (const currFunc of arrFuncs) await currFunc(dbResult.data);
        } catch (err) {
          console.error("[LoginAndroid] login error:", err);
        }
      }

      if (response.type === "error") {
        console.error("[LoginAndroid] error:", (response as any).error);
      }
    };

    run();
  }, [response]);

  const handlePress = async () => {
    try {
      setLoading(true);
      // Nativo: sem proxy
      await promptAsync();
    } catch (err) {
      setLoading(false);
      console.error("[LoginAndroid] promptAsync error:", err);
    }
  };

  return (
    <RN.View style={{ alignItems: "center" }}>
      <RN.Pressable
        onPress={handlePress}
        disabled={!request || loading}
        style={{
          backgroundColor: "#315e2d",
          paddingHorizontal: 20,
          height: 44,
          borderRadius: 999,
          alignItems: "center",
          justifyContent: "center",
          opacity: !request || loading ? 0.7 : 1,
        }}
      >
        <RN.Text style={{ color: "#fff", fontWeight: "700" }}>
          {loading ? "Conectando..." : "Entrar com Google"}
        </RN.Text>
      </RN.Pressable>

      {loading ? <RN.ActivityIndicator style={{ marginTop: 8 }} /> : null}
    </RN.View>
  );
};

// =========================================
// Componente: Login para Web
// =========================================
const LoginWeb = (props: { pass?: TLoginPass }) => {
  console.log("Comp Login WEB", { props });
  const pass = props?.pass ?? {};
  const args = pass.args;
  const arrFuncs = Array.isArray(pass.arrFuncs) ? pass.arrFuncs : [];
  const configs = normalizeConfigs(pass.configs);
  console.log("Comp Login WEB", { configs });

  // Renderiza apenas no Web
  if (RN.Platform.OS !== "web") return null;

  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const fbApp = getFirebaseApp();
      if (!fbApp)
        throw new Error("Firebase config nao encontrado para inicializar.");

      const auth = getAuth(fbApp);
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      let result;

      try {
        // 1) Tenta popup
        result = await signInWithPopup(auth, provider);
      } catch (popupErr: any) {
        console.warn("[LoginWeb] erro no popup:", popupErr?.code, popupErr);

        // Só cai para redirect se for erro tipico de popup
        const code = popupErr?.code as string | undefined;
        const popupIssues = [
          "auth/popup-blocked",
          "auth/popup-closed-by-user",
          "auth/cancelled-popup-request",
        ];

        if (code && popupIssues.includes(code)) {
          console.log("[LoginWeb] tentando fluxo de redirect...");
          await signInWithRedirect(auth, provider);
          return; // o resto sera tratado no useEffect (getRedirectResult)
        }

        // Se for outro erro → propaga
        throw popupErr;
      }

      // Se chegou aqui, popup funcionou
      if (!result?.user) {
        throw new Error("Resultado do login (popup) sem user.");
      }

      const dbResult = await setUserDB(result.user, auth);
      if (dbResult.status !== "success") {
        throw new Error(
          dbResult.message ?? "Falha ao salvar usuario no banco."
        );
      }

      for (const currFunc of arrFuncs) await currFunc(dbResult.data, args);
    } catch (err) {
      console.error("Erro no login Google (web):", err);
    } finally {
      setLoading(false);
    }
  };

  const defaultBtnStyle = {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  };

  const defaultTxtStyle = {
    fontWeight: "bold",
  };

  const customBtnStyles =
    configs?.btnStyle && Object.keys(configs.btnStyle).length > 0
      ? configs.btnStyle
      : null;

  const customTxtStyles =
    configs?.txtStyle && Object.keys(configs.txtStyle).length > 0
      ? configs.txtStyle
      : null;

  console.log("Comp Login WEB", { customBtnStyles });

  const defaultTxt = "Entrar com Google";
  const condText = configs?.txtLabel ?? defaultTxt;
  return (
    <RN.Pressable
      onPress={handleLogin}
      disabled={loading}
      style={({ pressed }) => [
        customBtnStyles ?? defaultBtnStyle,
        { opacity: pressed || loading ? 0.6 : 1 },
      ]}
      accessibilityRole="button"
      accessibilityLabel="Entrar com conta Google (Web)"
    >
      <RN.Text style={[customTxtStyles ?? defaultTxtStyle]}>
        {loading ? "Conectando..." : condText}
      </RN.Text>
    </RN.Pressable>
  );
};

// =========================================
// Wrapper: decide por plataforma
// =========================================
export const Login = (props: TProps) => {
  if (RN.Platform.OS === "web") {
    return <LoginWeb pass={props?.pass} />;
  }
  return <LoginNative pass={props?.pass} />;
};

const setUserDB = async (user: any, authFromLogin?: Auth) => {
  // Fictitious function to persist user data in the database
  console.log("Salvando usuario no banco de dados:", user);

  // Importa Firestore e salva o documento
  const { displayName, email, photoURL, uid } = user;
  let userToSet: Record<string, any> = {};

  const userData = {
    userName: displayName,
    userEmail: email,
    userImage: photoURL,
    docId: uid,
  };

  const {
    getFirestore,
    collection,
    doc,
    setDoc,
    updateDoc,
    serverTimestamp,
    getDoc,
    getDocs,
    query,
    where,
  } = await import("firebase/firestore");

  const fbApp = authFromLogin?.app ?? getFirebaseApp();
  if (!fbApp) {
    return { status: "error", message: "Firebase nao inicializado." };
  }
  const db = getFirestore(fbApp);

  let lotId = null;
  let condoId = null;

  // ---- LOTS
  const lotsCol = collection(db, "lots");
  const q = query(lotsCol, where("userEmail", "==", email));
  const searchLot = await getDocs(q);

  const lotExists = searchLot.docs.length > 0;
  if (lotExists) {
    const lotDoc = searchLot.docs[0];
    const lotData = lotDoc.data();
    console.log("Lote encontrado para o usuario:", lotData);

    lotId = lotDoc.id;
    condoId = lotData.condoId;
  } else {
    console.log("Nenhum lote encontrado para o usuario.");
  }

  // ---- USERS
  const usersCol = collection(db, "users");
  const userDocRef = doc(usersCol, uid);
  const userDocSnap = await getDoc(userDocRef);

  const userExists = userDocSnap.exists();

  if (userExists) {
    const fullRegister = userDocSnap.data().fullRegister;

    userToSet = {
      updatedAt: serverTimestamp(),
      ...userData,

      fullRegister,
      condoId: condoId ?? null,
      lotId: lotId ?? null,
    };

    // Atualiza documento existente
    await updateDoc(userDocRef, userToSet);
    console.log("Usuario atualizado no banco de dados.");
  } else {
    userToSet = {
      createdAt: serverTimestamp(),
      ...userData,

      fullRegister: false,
      typeAccount: "partner",
      condoId: condoId ?? null,
      lotId: lotId ?? null,
      steps: {},
    };
    console.log("Novo usuario adicionado ao banco de dados.");
    await setDoc(userDocRef, userToSet);
  }

  // Fallback
  return { status: "success", data: userToSet };
};
