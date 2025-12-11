async () => {
  try {
    const pathName = "sc.A12.forms.iptsChanges.partnerName";
    const pathEmail = "sc.A12.forms.iptsChanges.partnerMail";
    const pathPartner = "sc.A12.forms.iptsChanges.partnerActivity";

    const name = (tools.getCtData(pathName) ?? "").trim();
    const email = (tools.getCtData(pathEmail) ?? "").trim();
    const partnerActivity = (tools.getCtData(pathPartner) ?? "").trim();
    console.log({ name, email });

    const validateEmail = (v: string) => v.includes("@") && v.includes(".");
    console.log({ validateEmail: validateEmail(email) });

    if (name === "") {
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({ path: "sc.A12.msgs.msg1", value: "Preencha o Nome." });
      return;
    }
    if (email === "") {
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({ path: "sc.A12.msgs.msg1", value: "Preencha o Email." });
      return;
    }

    if (!validateEmail(email)) {
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({ path: "sc.A12.msgs.msg1", value: "Email inválido." });
      return;
    }

    // Auth
    const {
      getAuth,
      createUserWithEmailAndPassword,
      updateProfile,
      sendEmailVerification,
      sendPasswordResetEmail,
      fetchSignInMethodsForEmail,
    } = await import("firebase/auth");

    const fbInit = tools.getCtData("all.temp.fireInit");
    console.log({ fbInit });
    const auth = fbInit ? getAuth(fbInit) : getAuth();

    // ---- Pré-checagem opcional: já existe?
    const methods = await fetchSignInMethodsForEmail(auth, email);
    console.log({ methods });
    if (methods.length > 0) {
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({
        path: "sc.A12.msgs.msg1",
        value: "Esse usuário já foi criado anteriormente.",
      });
      
      return; // quebra o fluxo
    }

    const tempPass = "123456"; // senha padrão temporária
    console.log({ tempPass });
    const cred = await createUserWithEmailAndPassword(auth, email, tempPass);
    console.log({ cred });

    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }

    // >>>>>>>>>>>>>>> ADIÇÃO: criar/atualizar doc em 'users'
    {
      const { getFirestore, doc, setDoc, serverTimestamp } = await import(
        "firebase/firestore"
      );
      const db = fbInit ? getFirestore(fbInit) : getFirestore();

      const uid = cred.user.uid;

      // >>> PEGAR O VALOR DO CONDO
      const condoId =
        tools.getCtData("sc.A11.forms.iptsChanges.condoData.docId") ?? "";

      const dataToSet = {
        docId: uid,
        createdAt: serverTimestamp(),
        userName: name,
        userEmail: email,
        userImage: cred.user.photoURL || "",
        partnerActivity,
        typeAccount: "partner",
        condoId: condoId,
      };

      await setDoc(doc(db, "users", uid), dataToSet, { merge: true });
      console.log("users doc criado/atualizado:", { uid, dataToSet });
    }
    // <<<<<<<<<<<<<<< FIM DA ADIÇÃO

    // (opcional) enviar verificação
    const host = "http://localhost:5173";
    // const host = "http://projeto-plante-uma-casa.web.app";

    const acs = {
      url: host + "/auth/complete-signup",
      handleCodeInApp: false,
    };
    // await sendEmailVerification(cred.user);
    await sendPasswordResetEmail(auth, email, acs);

    tools.setData({ path: "sc.A12.forms.showErr", value: false });
    tools.setData({ path: "sc.A12.forms.showSuccess", value: true });
    tools.setData({
      path: "sc.A12.forms.msgs.msg1",
      value: "Usuário criado com sucesso!",
    });

    // Limpar mensagens após 2 segundos
    const delay = () => {
      tools.setData({ path: "all.toggles.sideRight", value: false });
      //close Form
      tools.functions.setVar({
        args: "",
        pass: {
          keyPath: ["all.toggles.forms"],
          value: [" "],
        },
      });
      tools.setData({ path: "sc.A12.forms.msgs.msg1", value: "" });
      tools.setData({
        path: "sc.A12.forms.iptsChanges",
        value: { partnerName: "", partnerMail: "", partnerActivity: "" },
      });
    };

    setTimeout(delay, 2500);

    // sucesso...
  } catch (e: any) {
    if (e?.code === "auth/email-already-in-use") {
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({
        path: "sc.A12.msgs.msg1",
        value: "Erro ao criar usuário.",
      });
      return;
    }

    tools.setData({ path: "sc.A12.forms.showErr", value: true });
    tools.setData({
      path: "sc.A12.msgs.msg1",
      value: "Erro ao Criar Parceiro. " + (e?.message ?? ""),
    });
  }
}
