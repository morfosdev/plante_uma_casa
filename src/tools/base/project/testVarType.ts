
import { getCtData } from './';

export const testVarType = string => {
	let varType = string;
	let newPath = '';
	let varValue = '';

	if (string.includes('$var_')){
		varType = 'var';
		newPath = string.replace('$var_', '');
		varValue = getCtData(newPath);
console.log("1",{varValue});
	}

	if (string.includes('$arg_')){
		varType = 'arg';
		newPath = string.replace('$arg_', '');

	}

  return varValue;
};
