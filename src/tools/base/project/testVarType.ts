
import { getCtData, findFlatItem } from './';

export const testVarType = (string, args) => {
	let varType = '';
	let newPath = '';
	let varValue = string;

	if (string.includes('$var_')){
		varType = 'var';
		newPath = string.replace('$var_', '');
		varValue = getCtData(newPath);
	}

	if (string.includes('$arg_')){
		varType = 'arg';
		newPath = string.replace('$arg_', '');
console.log({newPath})
varValue = findFlatItem(args)[newPath];
	}

  return varValue;
};
