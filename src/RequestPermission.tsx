// window.Notification.tsx
import { doc, getFirestore, setDoc } from "firebase/firestore";
import React from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useData } from ".";
import { enablePush } from "./enablePush";

export const RequestPermission = () => {
  const fireInit = useData((ct) => ct?.all?.temp?.fireInit);
  const userId = useData((ct) => ct?.all?.authUser?.docId);

  const [permissionEmpty, setPermissionEmpty] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  // 1) Mantém a UI sincronizada com a permissão
  React.useEffect(() => {
    if (typeof window === "undefined") {
      Alert.alert("Push", "Sem window (não é web).");
      return;
    }
    if (!("Notification" in window)) {
      Alert.alert("Push", "Notification API indisponível nesse navegador.");
      return;
    }
    if (typeof window.Notification === "undefined") {
      Alert.alert("Push", "window.Notification está undefined.");
      return;
    }
    Alert.alert("Push", `Permission atual: ${window.Notification.permission}`);
    setPermissionEmpty(window.Notification.permission !== "granted");
  }, []);

  // 2) Quando estiver granted, tenta pegar token e salvar (mesmo após reload)
  React.useEffect(() => {
    const run = async () => {
      if (!fireInit) {
        Alert.alert("Push", "fireInit vazio (firebase não iniciou).");
        return;
      }
      if (!userId) {
        Alert.alert("Push", "userId vazio (sem usuário logado/docId).");
        return;
      }
      if (typeof window === "undefined") {
        Alert.alert("Push", "Sem window (não é web).");
        return;
      }
      if (
        !("Notification" in window) ||
        typeof window.Notification === "undefined"
      ) {
        Alert.alert(
          "Push",
          "Notification API indisponível (window.Notification undefined).",
        );
        return;
      }
      if (window.Notification.permission !== "granted") {
        Alert.alert(
          "Push",
          `Permissão NÃO é granted: ${window.Notification.permission}`,
        );
        return;
      }

      const savedKey = `__push_token_saved__:${userId}`;
      if (sessionStorage.getItem(savedKey)) {
        Alert.alert("Push", "Token já marcado como salvo nessa sessão.");
        setPermissionEmpty(false);
        return;
      }

      setLoading(true);
      try {
        const db = getFirestore(fireInit);
        const userRef = doc(db, "users", userId);

        Alert.alert("Push", "Chamando enablePush (com permission granted)...");
        const res = await enablePush(fireInit);

        await setDoc(
          userRef,
          {
            pushDebug: {
              ok: res.ok,
              reason: (res as any).reason || null,
              message: (res as any).message || null,
              debug: (res as any).debug || null,
              at: new Date().toISOString(),
              notifPermission: window.Notification.permission,
            },
          },
          { merge: true },
        );

        if (res.ok && (res as any).token) {
          Alert.alert("Push", "Token recebido e será salvo no Firestore.");
          await setDoc(
            userRef,
            { pushToken: (res as any).token },
            { merge: true },
          );
          sessionStorage.setItem(savedKey, "1");
          setPermissionEmpty(false);
        } else {
          Alert.alert(
            "Push",
            `enablePush não retornou token. ok=${String(res.ok)} reason=${String(
              (res as any).reason ?? "",
            )}`,
          );
          setPermissionEmpty(window.Notification.permission !== "granted");
        }
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [fireInit, userId]);

  // 3) Clique só inicia o processo
  const onEnable = async () => {
    if (loading) {
      Alert.alert("Push", "Já está carregando...");
      return;
    }

    setLoading(true);
    try {
      if (!fireInit) {
        Alert.alert("Push", "fireInit vazio (firebase não iniciou).");
        return;
      }
      if (typeof window === "undefined") {
        Alert.alert("Push", "Sem window (não é web).");
        return;
      }
      if (
        !("Notification" in window) ||
        typeof window.Notification === "undefined"
      ) {
        Alert.alert("Push", "Notification API indisponível nesse navegador.");
        return;
      }

      Alert.alert(
        "Push",
        `Antes do enablePush: ${window.Notification.permission}`,
      );
      await enablePush(fireInit);
      Alert.alert(
        "Push",
        `Depois do enablePush: ${window.Notification.permission}`,
      );

      setPermissionEmpty(window.Notification.permission !== "granted");
    } finally {
      setLoading(false);
    }
  };

  if (!permissionEmpty) return null;

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#eceee9",
      }}
    >
      <Text
        style={{
          color: "black",
          marginBottom: 16,
          maxWidth: 300,
          textAlign: "center",
        }}
      >
        Ative as notificações para receber alertas sobre novas ações e
        atualizações!
      </Text>

      <Pressable
        style={{
          backgroundColor: "#315e2d",
          borderRadius: 12,
          padding: 15,
          opacity: loading ? 0.7 : 1,
        }}
        onPress={onEnable}
      >
        <Text style={{ color: "white" }}>
          {loading ? "Ativando..." : "Ativar notificações"}
        </Text>
      </Pressable>
    </View>
  );
};

// ----
// adicionar no index.tsx
// () => <RequestPermission />,
// Adicionar em a4list e c5steps
