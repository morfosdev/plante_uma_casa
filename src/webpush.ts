// webpush.ts
import { getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { firebaseConfig, VAPID_PUBLIC_KEY } from "../secrets";

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export async function enablePush() {
  try {
    if (typeof Notification === "undefined") {
      return { ok: false as const, reason: "no_notification_api" as const };
    }

    const perm = await Notification.requestPermission();
    if (perm !== "granted") {
      return { ok: false as const, reason: "permission_denied" as const };
    }

    if (!("serviceWorker" in navigator)) {
      return { ok: false as const, reason: "no_service_worker" as const };
    }

    // garante que o firebase já foi inicializado em algum lugar (App.tsx)
    if (!getApps().length) {
      return {
        ok: false as const,
        reason: "firebase_not_initialized" as const,
      };
    }

    // const app = getApp();
    // const messaging = getMessaging(app);

    // registra SW (sem module)
    await navigator.serviceWorker.register("/firebase-messaging-sw.js", {
      type: "module",
    });
    const reg = await navigator.serviceWorker.ready;

    if (!navigator.serviceWorker.controller) {
      const k = "__sw_reloaded_once__";
      if (!sessionStorage.getItem(k)) {
        sessionStorage.setItem(k, "1");
        location.reload();
      }
      return { ok: false as const, reason: "reloading_to_attach_sw" as const };
    }

    const token = await getToken(messaging, {
      vapidKey: VAPID_PUBLIC_KEY,
      serviceWorkerRegistration: reg,
    });

    if (!token) return { ok: false as const, reason: "empty_token" as const };

    return { ok: true as const, token };
  } catch (e: any) {
    console.log("FCM error:", e?.code, e?.message);
    return {
      ok: false as const,
      reason: e?.code || "exception",
      message: e?.message || String(e),
    };
  }
}
