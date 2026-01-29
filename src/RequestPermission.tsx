// SettingsNotifications.tsx
import { doc, getFirestore, setDoc } from "firebase/firestore";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useData } from ".";
import { enablePush } from "./enablePush";
// import { enablePush } from "./webpush";

export const RequestPermission = () => {
  const fireInit = useData((ct) => ct?.all?.temp?.fireInit);
  const userId = useData((ct) => ct?.all?.authUser?.docId);

  const [permissionEmpty, setPermissionEmpty] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  // 1) Mantém a UI sincronizada com a permissão
  React.useEffect(() => {
    if (typeof Notification === "undefined") return;
    setPermissionEmpty(Notification.permission !== "granted");
  }, []);

  // 2) Quando estiver granted, tenta pegar token e salvar (mesmo após reload)
  React.useEffect(() => {
    const run = async () => {
      if (!fireInit || !userId) return;
      if (typeof Notification === "undefined") return;
      if (Notification.permission !== "granted") return;

      const savedKey = `__push_token_saved__:${userId}`;
      if (sessionStorage.getItem(savedKey)) {
        setPermissionEmpty(false);
        return;
      }

      setLoading(true);
      try {
        const db = getFirestore(fireInit);
        const userRef = doc(db, "users", userId);

        const res = await enablePush(fireInit);

        // debug sempre
        await setDoc(
          userRef,
          {
            pushDebug: {
              ok: res.ok,
              reason: (res as any).reason || null,
              message: (res as any).message || null,
              debug: (res as any).debug || null,
              at: new Date().toISOString(),
              notifPermission: Notification.permission,
            },
          },
          { merge: true },
        );

        // salva token quando vier
        if (res.ok && (res as any).token) {
          await setDoc(
            userRef,
            { pushToken: (res as any).token },
            { merge: true },
          );
          sessionStorage.setItem(savedKey, "1");
          setPermissionEmpty(false);
        } else {
          // se ele pediu reload, não faz nada (a página vai recarregar)
          // se vier outro erro, mantém o botão visível
          setPermissionEmpty(Notification.permission !== "granted");
        }
      } finally {
        setLoading(false);
      }
    };

    run();
  }, [fireInit, userId]);

  // 3) Clique só inicia o processo
  const onEnable = async () => {
    if (loading) return;
    setLoading(true);
    try {
      await enablePush(fireInit);
      // depois disso, o effect acima é quem “finaliza” (token + firestore)
      if (typeof Notification !== "undefined") {
        setPermissionEmpty(Notification.permission !== "granted");
      }
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
        padding: 16,
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
