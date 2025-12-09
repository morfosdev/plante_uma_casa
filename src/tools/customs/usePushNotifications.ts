
// // src/hooks/usePushNotifications.ts
// import * as Device from "expo-device";
// import * as Notifications from "expo-notifications";
// import { useEffect, useRef, useState } from "react";
// import { Platform } from "react-native";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: false,
//   }),
// });

// export const usePushNotifications = () => {
//   const [expoPushToken, setExpoPushToken] = useState<string | null>(null);
//   const [notification, setNotification] =
//     useState<Notifications.Notification | null>(null);
//   const notificationListener = useRef<any>();
//   const responseListener = useRef<any>();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then((token) => {
//       if (token) setExpoPushToken(token);
//     });

//     // Listener quando chega notificação
//     notificationListener.current =
//       Notifications.addNotificationReceivedListener((notification) => {
//         setNotification(notification);
//       });

//     // Listener quando o usuário clica na notificação
//     responseListener.current =
//       Notifications.addNotificationResponseReceivedListener((response) => {
//         console.log("User clicked notification:", response);
//       });

//     return () => {
//       if (notificationListener.current) {
//         Notifications.removeNotificationSubscription(
//           notificationListener.current
//         );
//       }
//       if (responseListener.current) {
//         Notifications.removeNotificationSubscription(responseListener.current);
//       }
//     };
//   }, []);

//   return {
//     expoPushToken,
//     notification,
//   };
// };

// // -------- função de registro
// const registerForPushNotificationsAsync = async () => {
//   try {
//     if (!Device.isDevice) {
//       console.log("Precisa de device físico para push notifications");
//       return null;
//     }

//     // Permissão
//     const { status: existingStatus } =
//       await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;

//     if (existingStatus !== "granted") {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }

//     if (finalStatus !== "granted") {
//       console.log("Permissão de notificação negada");
//       return null;
//     }

//     // Android: configura canal
//     if (Platform.OS === "android") {
//       await Notifications.setNotificationChannelAsync("default", {
//         name: "default",
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: "#FF231F7C",
//       });
//     }

//     // Pega o token
//     const token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log("Expo push token:", token);
//     return token;
//   } catch (err) {
//     console.log("Erro ao registrar push:", err);
//     return null;
//   }
// };
