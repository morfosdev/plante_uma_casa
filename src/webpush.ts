// webpush.ts
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

import { firebaseConfig, VAPID_PUBLIC_KEY } from "../secrets";

const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export async function enablePush() {
  try {
    const perm = await Notification.requestPermission();
    if (perm !== "granted") return { ok: false, reason: perm as const };

    await navigator.serviceWorker.register("/firebase-messaging-sw.js", {
      type: "module",
    });
    const reg = await navigator.serviceWorker.ready;

    if (!navigator.serviceWorker.controller) {
      const k = "__sw_reloaded_once__";
      if (!sessionStorage.getItem(k)) {
        sessionStorage.setItem(k, "1");
        location.reload();
        return { ok: false, reason: "reloading_to_attach_sw" as const };
      }
    }

    const token = await getToken(messaging, {
      vapidKey: VAPID_PUBLIC_KEY,
      serviceWorkerRegistration: reg,
    });

    if (!token) return { ok: false, reason: "empty_token" as const };

    return { ok: true as const, token };
  } catch (e: any) {
    return {
      ok: false as const,
      reason: "exception" as const,
      message: e?.message || String(e),
    };
  }
}
