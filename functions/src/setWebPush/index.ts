import * as admin from "firebase-admin";
import * as functions from "firebase-functions/v1";

admin.initializeApp();

type PushPayload = {
  token: string;
  title?: string;
  body?: string;
  screen?: string;
};

export const sendPush = functions.https.onCall(async (payload: any) => {
  const { token, title, body, screen } = payload as PushPayload;

  if (!token) {
    throw new functions.https.HttpsError("invalid-argument", "Missing token");
  }

  const messageData: Record<string, string> = {};
  if (title) messageData.title = title;
  if (body) messageData.body = body;
  if (screen) messageData.screen = screen;

  await admin.messaging().send({
    token,
    data: messageData,
  });

  return { ok: true, sentAt: Date.now(), messageData };
});
