async () => {
  // ---------------- função auxiliar: vincular condomínio a parceiro já existente
  const vincularCondoEmUserExistente = async (params: {
    email: string;
    condoId: string;
    fbInit: any;
  }) => {
    const { email, condoId, fbInit } = params;
    console.log("Vinculando condomínio a usuário já existente:", {
      email,
      condoId,
    });

    const {
      getFirestore,
      collection,
      query,
      where,
      getDocs,
      doc,
      updateDoc,
      arrayUnion,
    } = await import("firebase/firestore");

    const db = fbInit ? getFirestore(fbInit) : getFirestore();

    if (!condoId) {
      console.warn("Nenhum condoId selecionado para vincular.");
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({
        path: "sc.A12.msgs.msg1",
        value: "Nenhum condomínio selecionado para vincular.",
      });
      return;
    }

    const q = query(
      collection(db, "users"),
      where("userEmail", "==", email)
    );

    const snap = await getDocs(q);

    if (snap.empty) {
      console.warn("Usuário existe no Auth, mas não está em 'users'.");
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({
        path: "sc.A12.msgs.msg1",
        value:
          "Usuário existe no Auth, mas não foi encontrado na base de usuários.",
      });
      return;
    }

    const userDoc = snap.docs[0];
    const uid = userDoc.id;
    const userRef = doc(db, "users", uid);

    await updateDoc(userRef, {
      condoIds: arrayUnion(condoId),
    });

    console.log("Condomínio vinculado ao user existente:", {
      uid,
      condoId,
    });

    // feedback de sucesso
    tools.setData({ path: "sc.A12.forms.showErr", value: false });
    tools.setData({ path: "sc.A12.forms.showSuccess", value: true });
    tools.setData({
      path: "sc.A12.forms.msgs.msg1",
      value: "Condomínio vinculado ao parceiro existente!",
    });

    const delay = () => {
      tools.setData({ path: "all.toggles.sideRight", value: false });
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
  };
  // ---------------- fim função auxiliar

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

    const condoId =
      tools.getCtData("sc.A11.forms.iptsChanges.condoData.docId") ?? "";
    if (!condoId) {
      tools.setData({ path: "sc.A12.forms.showErr", value: true });
      tools.setData({
        path: "sc.A12.msgs.msg1",
        value: "Selecione um condomínio antes de salvar.",
      });
      return;
    }

    // Auth
    const {
      getAuth,
      createUserWithEmailAndPassword,
      updateProfile,
      sendPasswordResetEmail,
    } = await import("firebase/auth");

    const fbInit = tools.getCtData("all.temp.fireInit");
    console.log({ fbInit });
    const auth = fbInit ? getAuth(fbInit) : getAuth();

    const tempPass = "123456"; // senha padrão temporária
    console.log({ tempPass });

    // ====== TENTA CRIAR USUÁRIO NO AUTH ======
    const cred = await createUserWithEmailAndPassword(auth, email, tempPass);
    console.log({ cred });

    if (name) {
      await updateProfile(cred.user, { displayName: name });
    }

    // ====== CRIAR DOC EM 'users' PARA NOVO USUÁRIO ======
    {
      const {
        getFirestore,
        doc,
        setDoc,
        serverTimestamp,
      } = await import("firebase/firestore");
      const db = fbInit ? getFirestore(fbInit) : getFirestore();

      const uid = cred.user.uid;

      const dataToSet = {
        docId: uid,
        createdAt: serverTimestamp(),
        userName: name,
        userEmail: email,
        userImage: cred.user.photoURL || "",
        partnerActivity,
        typeAccount: "partner",
        condoId: condoId,      // se ainda precisar manter legado
        condoIds: [condoId],   // novo array
      };

      await setDoc(doc(db, "users", uid), dataToSet, { merge: true });
      console.log("users doc criado/atualizado (novo parceiro):", {
        uid,
        dataToSet,
      });
    }

    // enviar e-mail para definir senha
    const host = "http://localhost:5173";
    // const host = "http://projeto-plante-uma-casa.web.app";

    const acs = {
      url: host + "/auth/complete-signup",
      handleCodeInApp: false,
    };
    await sendPasswordResetEmail(auth, email, acs);

    tools.setData({ path: "sc.A12.forms.showErr", value: false });
    tools.setData({ path: "sc.A12.forms.showSuccess", value: true });
    tools.setData({
      path: "sc.A12.forms.msgs.msg1",
      value: "Usuário criado com sucesso!",
    });

    const delay = () => {
      tools.setData({ path: "all.toggles.sideRight", value: false });
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
  } catch (e: any) {
    console.log("Erro ao criar usuário:", e?.code, e?.message);

    if (e?.code === "auth/email-already-in-use") {
      const email =
        (tools.getCtData("sc.A12.forms.iptsChanges.partnerMail") ?? "").trim();
      const condoId =
        tools.getCtData("sc.A11.forms.iptsChanges.condoData.docId") ?? "";
      const fbInit = tools.getCtData("all.temp.fireInit");

      await vincularCondoEmUserExistente({ email, condoId, fbInit });
      return;
    }

    tools.setData({ path: "sc.A12.forms.showErr", value: true });
    tools.setData({
      path: "sc.A12.msgs.msg1",
      value: "Erro ao Criar Parceiro. " + (e?.message ?? ""),
    });
  }
}
