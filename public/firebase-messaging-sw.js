// public/firebase-messaging-sw.js

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

// Recebe push em background e exibe notificação (controle total)
onBackgroundMessage(messaging, (payload) => {
  const title =
    payload?.notification?.title || payload?.data?.title || "Nova notificação";

  const body = payload?.notification?.body || payload?.data?.body || "";

  self.registration.showNotification(title, {
    body,
    icon: "/icons/icon-192.png",
    data: payload?.data || {},
  });
});

// Clique na notificação: abrir o app na rota padrão (/)
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url = "/";

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then((wins) => {
        for (const w of wins) {
          // Se já existe uma aba/janela do app, só foca
          if ("focus" in w) return w.focus();
        }
        // Se não existe, abre uma nova
        return clients.openWindow(url);
      }),
  );
});
