
// ---------- import React Packs
import React from "react";
import * as RN from "react-native";

import { getAuth } from "firebase/auth";
import {
  arrayUnion,
  doc,
  getFirestore,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { Platform, SafeAreaView, StatusBar } from "react-native";

// ---------- import Variables Pack

// ---------- import Local Tools
import { usePushNotifications } from "../../customs/usePushNotifications";
import { goTo } from "./goTo";
import { mapElements } from "./mapElements";
import { setData } from "./setData";

// ---------- set Caps Inputs
type Tprops = {
  configData: {
    screens: any[];
    initCt: Record<string, any>;
    arrInitFuncs: (() => void)[];
  };
};

// ---------- set Main Component
export const Project = ({ configData }: Tprops) => {
  // ---------- set Data
  const { screens, arrInitFuncs } = configData;
  const condWeb = Platform.OS === "web";
  const fallbackData = { expoPushToken: null, notification: null };
  const { expoPushToken } = usePushNotifications() ?? fallbackData;

  // ---------- call Redirects (If Exists)
  // ---------- quando o token mudar, salva no Firestore
  React.useEffect(() => {
    if (!expoPushToken) return;
    console.log({ expoPushToken });
    
    const run = async () => {
      await saveExpoPushTokenToUser(expoPushToken);
    };

    run().catch((err) =>
      console.log("Project: erro ao salvar expoPushToken", err)
    );
  }, [expoPushToken]);

  React.useEffect(() => {
    if (condWeb) {
      const { pathname, search } = window.location;

      if (pathname.startsWith("/auth/setpassword")) {
        const qs = Object.fromEntries(new URLSearchParams(search).entries());
        console.log({ qs });

        goTo("a0dsetpass");

        // guarde params para a tela usar (confirmPasswordReset etc.)
        setData({
          path: "sc.A0D.forms.iptsChanges",
          value: {
            mode: qs.mode,
            oobCode: qs.oobCode,
            continueUrl: qs.continueUrl,
          },
        });
      }
    }
  }, []);

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of arrInitFuncs) await currFunc();
    };

    callFn().catch((err) => console.log("Project Start Functions", { err }));
  }, []);

  const baseStl: RN.ViewStyle = {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  };

  return (
    <RN.View style={baseStl}>
      <SafeAreaView
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      >
        {mapElements(screens)}

        <StatusBar barStyle={"light-content"} />
      </SafeAreaView>
    </RN.View>
  );
};

// Salva o token no documento do usuário em `users/{uid}`
export async function saveExpoPushTokenToUser(expoPushToken: string | null) {
  try {
    if (!expoPushToken) {
      console.log("saveExpoPushTokenToUser: token vazio, ignorando");
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      console.log("saveExpoPushTokenToUser: usuário não autenticado");
      return;
    }

    const db = getFirestore();
    const userRef = doc(db, "users", user.uid);

    // Modelo com vários devices por usuário
    await setDoc(
      userRef,
      {
        notifications: {
          expoPushTokens: arrayUnion({
            token: expoPushToken,
            platform: Platform.OS,
            updatedAt: serverTimestamp(),
          }),
        },
      },
      { merge: true }
    );

    console.log("saveExpoPushTokenToUser: token salvo com sucesso");
  } catch (err) {
    console.log("saveExpoPushTokenToUser: erro ao salvar token", err);
  }
};
