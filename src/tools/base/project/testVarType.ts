
export const testVarType = string => {
  let varType = '';

  if (string.includes('$var_')) varType = 'var';
  if (string.includes('$arg_')) varType = 'arg';

  return varType;
};
