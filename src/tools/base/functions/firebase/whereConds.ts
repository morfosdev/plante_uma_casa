
import { testVarType } from '../../project';
type Tprops = { args: any; pass: { arrStrings: string[] } };

export const whereConds = (props: Tprops) => {
  // ---------- set Props
  const { args } = props;
  const { arrStrings } = props.pass;
  console.log({ whereConds: arrStrings });

  const objReturn = {
    field: testVarType(arrStrings[0], args) ?? 'xx',
    operator: testVarType(arrStrings[1], args) ?? '==',
    value: testVarType(arrStrings[2], args) ?? 'xx',
  };

  console.log('whereCond', { objReturn });
  return objReturn;
};
