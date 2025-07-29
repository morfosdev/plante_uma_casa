
import { getCtData, testVarType } from '../../project';
import * as firestore from 'firebase/firestore';

type Tprops = {
  args: any;
  pass: {
    fbInit: any;
    arrRefStrings: string[];
    arrWhere: any;
    arrFuncs: any[];
  };
};

export const css1 =
  'color: green; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: yellow; background-color: green; font-size: 10px; padding: 2px 6px; border-radius: 3px';

export const where = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { arrRefStrings, arrWhere, arrFuncs } = pass;
  const newArrStringRefs = arrRefStrings.map(i => {
    console.log('1', { i });
    const varValue = testVarType(i, args);
    console.log('2', { varValue });

    return varValue;
  });

  console.log('3', { newArrStringRefs });

  // ---------- set Local Imports
  const { getFirestore, getDocs, collection, where, query } = firestore;
  // ---------- set Caps Inputs

  // ---------- set Short Str
  const fbErrMsg1 = 'Alguma entrada where foi preenchida errado.';
  const par1 = 'noComponent';

  // -----------------------------
  // ---------- set Init Firestore
  // -----------------------------
  const fbInit = getCtData('all.temp.fireInit');
  if (!fbInit) return console.log(fbErrMsg1, { fbInit });
  const fireInit: any = getFirestore(fbInit[0]);

  const arrConds: any = [];
  const newArrWh = () => {
    const promiseArray = arrWhere.map((capsCond: any) => {
      const resolve = capsCond();
      const field = testVarType(resolve.field, args);
      const operator = testVarType(resolve.operator, args);
      const value = testVarType(resolve.value, args);

      arrConds.push({ field, operator, value });

      return getDocs(query(refColl, where(field, operator, value)));
    });

    return promiseArray;
  };

  const refColl = collection(fireInit, ...newArrStringRefs);
  const resolvePromise = await Promise.all(newArrWh());

  const arrDocs = [];
  resolvePromise &&
    resolvePromise.forEach((snaps: any) => {
      snaps.forEach((doc: any) => {
        arrDocs.push(doc.data());
      });
    });

  console.log('%cWhere Cond', css1, { arrConds });

  console.log('%cWhere Cond', css1, { newArrStringRefs });

  console.log('%cWhere Docs Found', css2, { arrDocs });

  for (const currFunc of arrFuncs) currFunc(arrDocs, args);
};

