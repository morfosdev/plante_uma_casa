import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import nodemailer from "nodemailer";

// Validação simples de e-mail
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).toLowerCase());

// Transport SMTP via env/config do Firebase
const transporter = nodemailer.createTransport({
  host: functions.config().smtp.host,      // ex: "smtp.sendgrid.net"
  port: Number(functions.config().smtp.port || 587),
  secure: false,                           // true se 465
  auth: {
    user: functions.config().smtp.user,    // ex: "apikey"
    pass: functions.config().smtp.pass,    // ex: chave do provedor
  },
});

// Callable: gerar link de reset e enviar e-mail
export const sendPasswordResetEmailLink = functions
  .region("us-central1")
  .https.onCall(async (data: any, context: any) => {
    // (Opcional) restringir a admins: if (!context.auth) throw new functions.https.HttpsError("unauthenticated", "Auth required.");

    const email = String(data?.email ?? "").trim();
    const domain = String(data?.domain ?? "").trim();

    if (!isEmail(email)) {
      throw new functions.https.HttpsError("invalid-argument", "E-mail inválido.");
    }

    
    const acs = {
      url: `https://${domain}/auth/reset-done`, // pós-reset (opcional)
      handleCodeInApp: false,
    };

    // Gera o link oficial (inclui oobCode, mode, apiKey, etc.)
    const resetLink = await admin.auth().generatePasswordResetLink(email, acs);

    const from = functions.config().smtp.from || `no-reply@${domain}`;
    const subject = "Redefina sua senha";
    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial">
        <p>Olá,</p>
        <p>Para definir sua senha, clique no link abaixo:</p>
        <p><a href="${resetLink}">${resetLink}</a></p>
        <p>Se não foi você, ignore este e-mail.</p>
        <p>— Equipe</p>
      </div>
    `;

    await transporter.sendMail({ from, to: email, subject, html });

    return { ok: true };
  });
