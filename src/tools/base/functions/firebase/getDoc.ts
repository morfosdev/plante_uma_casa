
// ---------- import Packs
import { getCtData, testVarType } from '../../project';
import { doc } from 'firebase/firestore';
import { getFirestore, onSnapshot } from 'firebase/firestore';

export const css1 =
  'color: green; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: yellow; background-color: green; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  args: any;
  pass: { arrRefStrings: string[]; arrFuncs: any[] };
};

export const getDocTool = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { arrRefStrings, arrFuncs } = pass;

  const newArrStringRefs = arrRefStrings.map(i => {
    console.log('1', { i });
    const varValue = testVarType(i, args);
    console.log('2', { varValue });

    return varValue;
  });

  console.log('3', { newArrStringRefs });	


  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  const fbInit = getCtData('all.temp.fireInit');
  console.log({ fbInit });
  console.log({ arrRefStrings });
  const fireInit = getFirestore(fbInit);
  const refColl = doc(fireInit, ...newArrStringRefs);

  const unsub = onSnapshot(refColl, success => {
    let Doc = {};
    console.log({ success });
    if (success) Doc = success.data();

    // ---------- set Get Value Functions
    console.log({ Doc });

		for (const currFunc of arrFuncs) currFunc(args, Doc);
		
  console.log('%cgetDoc ok', css1);
		console.log('%cReferencia do Documento', css2, { newArrStringRefs, Doc });


  });
};
