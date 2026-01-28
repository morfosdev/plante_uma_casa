// SettingsNotifications.tsx
import { doc, getFirestore, setDoc } from "firebase/firestore";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useData } from ".";
import { enablePush } from "./webpush";

export const EnableNotificationsButton = () => {
  const [permissionEmpty, setPermissionEmpty] = React.useState(true);

  const fireInit = useData((ct) => ct?.all?.temp?.fireInit);
  const userId = useData((ct) => ct?.all?.authUser?.docId);

  React.useEffect(() => {
    if (typeof Notification !== "undefined") {
      setPermissionEmpty(Notification.permission !== "granted");
    }
  }, []);

  return (
    <>
      {permissionEmpty && (
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
            }}
            onPress={async () => {
              window.alert("Ativando notificações..." + userId + fireInit);

              if (!fireInit || !userId) return;

              const db = getFirestore(fireInit);
              const userRef = doc(db, "users", userId);

              const res = await enablePush();

              // LOG de debug (sempre salva)
              await setDoc(
                userRef,
                {
                  pushDebug: {
                    ok: res.ok,
                    reason: (res as any).reason || null,
                    message: (res as any).message || null,
                    at: new Date().toISOString(),
                    notifPermission:
                      typeof Notification !== "undefined"
                        ? Notification.permission
                        : null,
                  },
                },
                { merge: true },
              );

              // Só salva token se tiver token
              if (res.ok && res.token) {
                await setDoc(
                  userRef,
                  { pushToken: res.token },
                  { merge: true },
                );
                setPermissionEmpty(false);
              }
            }}
          >
            <Text style={{ color: "white" }}>Ativar notificações</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};
