
import { getCtData } from './';

export const testVarType = string => {
	let varType = '';
	let newPath = '';
	let varValue = '';

	if (string.includes('$var_')){
		varType = 'var';
		newPath = string.replace('$var_', '');
		varValue = getCtData(newPath);
	}

	if (string.includes('$arg_')){
		varType = 'arg';
		newPath = string.replace('$arg_', '');

	}

  return varValue;
};
