
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

export const where = (props: Tprops) => {
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
  const {
    getFirestore,
    collection,
    where,
    query,
    onSnapshot,
  } = firestore;

  // ---------- set Short Str
  const fbErrMsg1 = 'Alguma entrada where foi preenchida errado.';

  // ---------- set Init Firestore
  const fbInit = getCtData('all.temp.fireInit');
  if (!fbInit) return console.log(fbErrMsg1, { fbInit });
  const fireInit: any = getFirestore(fbInit);

  const arrConds: any[] = [];
  const refColl = collection(fireInit, ...newArrStringRefs);

  let currQuery: any = refColl;

  arrWhere.forEach((capsCond: any) => {
    const resolve = capsCond();
    const field = resolve.field;
    const operator = resolve.operator;
    const value = resolve.value;

    arrConds.push({ field, operator, value });

    currQuery = query(currQuery, where(field, operator, value));
  });

  // ---------- onSnapshot
  onSnapshot(currQuery, snapshot => {
    const arrDocs: any[] = [];
    snapshot.forEach(doc => {
      arrDocs.push(doc.data());
    });

    console.log('%cWhere Cond', css1, { arrConds });
    console.log('%cWhere Cond', css1, { newArrStringRefs });
    console.log('%cWhere Docs Found (Real-Time)', css2, { arrDocs });

    for (const currFunc of arrFuncs) currFunc(arrDocs, args);
  });
};

