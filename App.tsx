import React from "react";
import { Platform, StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Router, useData } from "./src";
import { tools } from "./src/tools";

export default function App() {
  const fullRegister = useData((ct) => ct.all.authUser?.fullRegister);

  React.useEffect(() => {
    const auth = getAuth();

    const unsubAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log({ fullRegister });
        tools.goTo(fullRegister ? "c5steps" : "c2register");
      } else {
        tools.goTo("c1login");
      }
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
  }, [fullRegister]);

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
