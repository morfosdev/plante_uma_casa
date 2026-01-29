// webpush.ts
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";
import { firebaseConfig, VAPID_PUBLIC_KEY } from "../secrets";

const resolveApp = (app?: FirebaseApp) => {
  if (app) return app;
  if (getApps().length) return getApp();
  return initializeApp(firebaseConfig);
};

export async function enablePush(app?: FirebaseApp) {
  let debug: { appName?: string; appOptions?: any } = {};
  try {
    if (!(await isSupported())) {
      return { ok: false as const, reason: "messaging_not_supported" as const };
    }

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

    // registra
    await navigator.serviceWorker.register("/firebase-messaging-sw.js", {
      type: "module",
    });
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

    const resolvedApp = resolveApp(app);
    const appOptions: any = resolvedApp?.options || {};
    debug = {
      appName: resolvedApp?.name,
      appOptions,
    };
    const missingCfg = [
      "apiKey",
      "projectId",
      "messagingSenderId",
      "appId",
    ].filter((key) => !appOptions?.[key]);

    if (missingCfg.length) {
      return {
        ok: false as const,
        reason: "missing_firebase_config" as const,
        missing: missingCfg,
        debug,
      };
    }

    const messaging = getMessaging(resolvedApp);

    const token = await getToken(messaging, {
      vapidKey: VAPID_PUBLIC_KEY,
      serviceWorkerRegistration: reg,
    });

    if (!token) {
      return {
        ok: false as const,
        reason: "empty_token" as const,
        debug,
      };
    }

    return { ok: true as const, token, debug };
  } catch (e: any) {
    console.log("FCM error:", e?.code, e?.message);

    return {
      ok: false as const,
      reason: "exception" as const,
      message: e?.message || String(e),
      debug,
    };
  }
}
