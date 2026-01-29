import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import { Router, useData } from "./src";
import { tools } from "./src/tools";
import { getCtData } from "./src/tools/base/project";

export default function App() {
  const fireInit = useData((ct) => ct.all?.temp?.fireInit);
  const fullRegister = useData((ct) => ct.all?.authUser?.fullRegister);

  const loadedUidRef = React.useRef<string | null>(null);
  const didInitRef = React.useRef(false);

  // A) init firebase (1x)
  React.useEffect(() => {
    if (didInitRef.current) return;
    didInitRef.current = true;

    tools.functions.firebase.fireInit({
      args: "",
      pass: { fbConfig: `all.firebaseConfig`, arrFuncs: [] },
    });
  }, []);

  // B) auth flow
  React.useEffect(() => {
    console.log({ fireInit });

    if (!fireInit) return;

    // ✅ garanta que auth e firestore estão no MESMO app
    const auth = getAuth(fireInit);
    const db = getFirestore(fireInit);

    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        loadedUidRef.current = null;

        // adm - a0login
        // app - c1login
        tools.goTo("c1login");
        return;
      }

      // ✅ sempre resolve a partir do estado mais atual possível
      let resolvedFullRegister = (fullRegister as boolean | undefined) ?? false;

      // só busca no Firestore se trocou usuário (ou nunca carregou)
      if (loadedUidRef.current !== user.uid) {
        loadedUidRef.current = user.uid;

        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          const userDB = snap.exists() ? (snap.data() as any) : null;

          tools.setData({
            path: "all.authUser",
            value: { uid: user.uid, ...(userDB || {}) },
          });

          if (typeof userDB?.fullRegister === "boolean") {
            resolvedFullRegister = userDB.fullRegister;
          }
        } catch (e: any) {
          tools.setData({
            path: "all.temp.pushDebug",
            value: {
              ok: false,
              reason: "load_user_failed",
              message: e?.message || String(e),
            },
          });
        }
      } else {
        // ✅ se não buscou do Firestore, ainda pega do estado atual
        resolvedFullRegister =
          (getCtData("all.authUser.fullRegister") as boolean | undefined) ??
          resolvedFullRegister;
      }

      tools.goTo(resolvedFullRegister ? "c5steps" : "c2register");
    });

    let onControllerChange: (() => void) | null = null;
    if (Platform.OS === "web" && "serviceWorker" in navigator) {
      onControllerChange = () => window.location.reload();
      navigator.serviceWorker.addEventListener(
        "controllerchange",
        onControllerChange,
      );
    }

    return () => {
      unsubAuth();
      if (onControllerChange) {
        navigator.serviceWorker.removeEventListener(
          "controllerchange",
          onControllerChange,
        );
      }
    };
  }, [fireInit]);

  return (
    <View style={styles.container}>
      <Router />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
