
import React from "react";
import * as RN from "react-native";

// ---------- import Packs
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, } from "firebase/auth";
import { useData } from '../../..';

// Finaliza sessões pendentes (necessário para Web/Expo)
WebBrowser.maybeCompleteAuthSession();

type Tprops = {
  pass: {
    arrFuncs?: {};
    configs?: string[];
    args?: {};
  };
};

// ---------- IDs do Google OAuth por plataforma (preencha!)
const IOS_CLIENT_ID = "";
const ANDROID_CLIENT_ID =
  "1099098264007-thb39j1g2ilg74mvrquruu01iaifj9e1.apps.googleusercontent.com";

// =========================================
// Componente: Login para Nativo (Android/iOS)
// =========================================
export const LoginNative = () => {
  const [loading, setLoading] = React.useState(false);

  // Somente Android nativo
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    selectAccount: true,
  });

  React.useEffect(() => {
    if (!response) return;
    setLoading(false);

    if (response.type === "success") {
      const idToken = response.params?.id_token as string | undefined;
      console.log("[LoginAndroid] id_token:", idToken);
      // -> autentique no backend/Firebase se desejar
    } else if (response.type === "error") {
      console.error("[LoginAndroid] error:", (response as any)?.error);
    }
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
          {loading ? "Conectando…" : "Entrar com Google"}
        </RN.Text>
      </RN.Pressable>

      {loading ? <RN.ActivityIndicator style={{ marginTop: 8 }} /> : null}
    </RN.View>
  );
};

// =========================================
// Componente: Login para Web
// =========================================
const LoginWeb = () => {
  // Renderiza apenas no Web
  if (RN.Platform.OS !== "web") return null;

  const [loading, setLoading] = React.useState(false);
  const fbInit = useData(ct => ct?.all?.temp?.fireInit);
  console.log({ fbInit });
  
  const auth = fbInit ? getAuth(fbInit) : getAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);

      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      // Pop-up (recomendado). Se o navegador bloquear, cai para redirect.
      let result;
      try {
        result = await signInWithPopup(auth, provider);
      } catch (popupErr) {
        // fallback para redirect (útil em bloqueio de pop-up)
        await signInWithRedirect(auth, provider);
        return;
      }
    } catch (err) {
      console.error("Erro no login Google (web):", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RN.Pressable
      onPress={handleLogin}
      disabled={loading}
      style={({ pressed }) => [
        {
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#ccc",
          alignItems: "center",
          justifyContent: "center",
          opacity: pressed || loading ? 0.6 : 1,
          backgroundColor: "#fff",
        },
      ]}
      accessibilityRole="button"
      accessibilityLabel="Entrar com conta Google (Web)"
    >
      <RN.Text style={{ fontWeight: "600" }}>
        {loading ? "Conectando..." : "Entrar com Google"}
      </RN.Text>
    </RN.Pressable>
  );
};

// =========================================
// Wrapper: decide por plataforma
// =========================================
export const Login = (props: Tprops) => {
  const args = props?.pass?.args;
  const [loading, setLoading] = React.useState(false);

  if (RN.Platform.OS === "web") {
    return <LoginWeb />;
  }
  return <LoginNative />;
};
