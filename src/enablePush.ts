// webpush.ts
import { getApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { VAPID_PUBLIC_KEY } from "../secrets";

const app = getApp();
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

    // registra (sem module)
    await navigator.serviceWorker.register("/firebase-messaging-sw.js");
    const reg = await navigator.serviceWorker.ready;

    // na primeira vez, o controller pode vir null -> precisa reload (1x)
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
      reason: "exception" as const,
      message: e?.message || String(e),
    };
  }
}
