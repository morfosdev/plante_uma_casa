
import { getCtData, testVarType } from '../../project';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

type Tprops = {
  args: any;
  pass: { fbInit: any; arrRefStrings: string[]; arrFuncs: any[] };
};

export const getDocsTool = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
	const { arrRefStrings, arrFuncs } = pass;
	
	const newArrStringRefs = arrRefStrings.map(i => {

		const varValue = testVarType(i);
console.log("2",{varValue});


return varValue;
});



  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  const fbInit = getCtData('all.temp.fireInit');

  const fireInit = getFirestore(fbInit);
  const refColl = collection(fireInit, ...newArrStringRefs);

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
