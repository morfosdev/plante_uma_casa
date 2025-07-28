
import { getCtData } from '../../project';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

type Tprops = {
  args: any;
  pass: { fbInit: any; arrRefStrings: string[]; arrFuncs: any[] };
};

export const getDocsTool = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
	const { arrRefStrings, arrFuncs } = pass;
	
	console.log({arrRefStrings});


  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  const fbInit = getCtData('all.temp.fireInit');

  const fireInit = getFirestore(fbInit);
  const refColl = collection(fireInit, ...arrRefStrings);

  const unsub = onSnapshot(refColl, success => {
    const arrDocs = [];
    success.forEach((doc: any) => {
      arrDocs.push(doc.data());
    });

    // ---------- set Get Value Functions
    console.log({ arrDocs });
    for (const currFunc of arrFuncs) currFunc(arrDocs, args);
  });
};
