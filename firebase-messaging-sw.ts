import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
    getMessaging,
    onBackgroundMessage,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-sw.js";

console.log("[SW] firebase-messaging-sw.js carregado");

const firebaseConfig = {
  apiKey: "AIzaSyA_D6qWCRodaRgthOGWyLjsbqloqj-IDpA",
  authDomain: "projeto-plante-uma-casa.firebaseapp.com",
  projectId: "projeto-plante-uma-casa",
  storageBucket: "projeto-plante-uma-casa.firebasestorage.app",
  messagingSenderId: "1099098264007",
  appId: "1:1099098264007:web:5c809faec264a9400389e2",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
  const title = payload?.notification?.title || "Nova notificação";
  self.registration.showNotification(title, {
    body: payload?.notification?.body || "",
    icon: "/icons/icon-192.png",
    data: payload?.data || {},
  });
});
