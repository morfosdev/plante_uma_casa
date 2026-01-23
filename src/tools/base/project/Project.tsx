
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
import { getCtData } from "./getCtData";
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
  console.log({ fallbackData });
  const { expoPushToken } = usePushNotifications() ?? fallbackData;

  // ---------- call Redirects (If Exists)
  // ---------- quando o token mudar, salva no Firestore
  React.useEffect(() => {
    if (!expoPushToken) return;

    const run = async () => {
      console.log({ expoPushToken });
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
        style={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: "#081308" }}
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

    const fbInit = getCtData("all.temp.fireInit");
    if (!fbInit) {
      console.log("saveExpoPushTokenToUser: fireInit não encontrado, abortando");
      return;
    }

    const auth = getAuth(fbInit);
    const user = auth.currentUser;

    if (!user) {
      console.log("saveExpoPushTokenToUser: usuário não autenticado");
      return;
    }

    const db = getFirestore(fbInit); // usa mesma app
    const userRef = doc(db, "users", user.uid);

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
