
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getCtData, testVarType } from "../../project";

type Tprops = {
  args: any;
  pass: { arrFiles: any[]; arrFuncs: any[] };
};

export const uploadFileTool = async (props: Tprops) => {
  console.log("UPLOAD DE ARQUIVOS");
  // ---------- set Props
  const { args, pass } = props;
  const { arrFiles, arrFuncs } = pass;
  console.log({ arrFiles, arrFuncs });

  // ---------- set Paths Treatment
  const newArrImages = arrFiles.map((i) => {
    const varValue = testVarType(i, args);
    console.log("2", { varValue });

    return varValue;
  });

  // -----------------------------
  // -------- set Firestore Call 1
  // -----------------------------
  const fbInit = getCtData("all.temp.fireInit");

  const storage = getStorage(fbInit);
  const objData = newArrImages[0];
  console.log({ objData });

  objData &&
    objData.forEach(async (currData: any, idx: number) => {
        console.log({ currData });
      const time = Date.now().toString();
      const strRefFile = ref(storage, `images/` + time + currData.name);
      console.log({ strRefFile });
      const file = objData.output[idx];
      console.log({ file });
      await uploadBytes(strRefFile, file);

      // ---------- set Return Functions
      const firestoreURL = await getDownloadURL(strRefFile);
      console.log({ firestoreURL });

      for (const currFunc of arrFuncs) await currFunc(args, firestoreURL, idx);
    });
};

