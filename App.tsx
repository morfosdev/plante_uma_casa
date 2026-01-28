import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import { Router, useData } from "./src";
import { tools } from "./src/tools";

export default function App() {
  const fireInitArr = useData((ct) => ct.all.temp.fireInit);
  const fullRegister = useData((ct) => ct.all.authUser?.fullRegister);

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

  // B) auth flow (só quando tiver app pronto)
  React.useEffect(() => {
    const fbApp = fireInitArr?.[0];
    if (!fbApp) return;

    const auth = getAuth();
    const db = getFirestore(fbApp);

    const unsubAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        loadedUidRef.current = null;
        tools.goTo("c1login");
        return;
      }

      let resolvedFullRegister = fullRegister;

      if (loadedUidRef.current !== user.uid) {
        loadedUidRef.current = user.uid;

        try {
          const snap = await getDoc(doc(db, "users", user.uid));
          const userDB = snap.exists() ? snap.data() : null;

          tools.setData({
            path: "all.authUser",
            value: { uid: user.uid, ...userDB },
          });

          // pega do dado recém buscado quando existir
          if (userDB && typeof (userDB as any).fullRegister === "boolean") {
            resolvedFullRegister = (userDB as any).fullRegister;
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
  }, [fireInitArr?.[0]]); // <- não coloca fullRegister aqui

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
