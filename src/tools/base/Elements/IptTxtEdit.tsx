
// ---------- import Packs
import React from 'react';
import JSON5 from 'json5';
import { TextInput } from 'react-native';

// ---------- import Local Tools
import { getVarValue, getStlValues, pathSel, setData } from '../project';
import { useData } from '../../..';

type TFunc = (val: string, args?: any) => any | Promise<any>;

type Tprops = {
  pass: {
    propsArray?: any[];
    stylesArray?: any[];
    funcsArray?: TFunc[]; // opcional
    path: (string | number)[];
    args?: any;
  };
};

// IptTxtEdit - Entrada de Texto com prop value
export const IptTxtEdit = (props: Tprops) => {
  const {
    propsArray = [],
    stylesArray = [],
    funcsArray = [],
    path,
    args,
  } = props.pass;

  const joinedPath = path.join();

  // Estado local
  const [sttText, setText] = React.useState('');

  // Leitura do store (sempre segura; só vamos usar quando for o caso)
  const editData = useData(ct => pathSel(ct, joinedPath));

  // Tem handlers externos?
  const hasExternal = Array.isArray(funcsArray) && funcsArray.length > 0;

  // Hidrata do store apenas quando há fluxo externo
  React.useEffect(() => {
    if (!hasExternal) return;
    if (editData !== undefined && editData !== sttText) {
      setText(String(editData));
    }
  }, [editData, hasExternal, sttText]);

  // onChange: decide o “modo”
  const getTxt = async (val: string) => {
    if (!hasExternal) {
      // modo interno: só estado local
      setText(val);
      return;
    }

    // modo externo: mantém input responsivo e sincroniza store
    setText(val); // feedback imediato
    setData({ path: joinedPath, value: val });
    for (const fn of funcsArray) {
      await fn(val, args);
    }
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);

  // ---------- Extra props do usuário
  const userElProps: Record<string, any> = {};
  for (const strObj of propsArray) {
    if (!strObj || typeof strObj !== 'string') continue;
    const parsed = JSON5.parse(strObj);
    for (const key in parsed) {
      const value = parsed[key];
      const [hasVar, varValue] = getVarValue(value);
      userElProps[key] = hasVar ? varValue : value;
    }
  }

  const allProps = {
    style: stlsUser,
    value: sttText,
    onChangeText: getTxt,
    placeholder: 'Escreva...',
    placeholderTextColor: '#ccc',
    ...userElProps,
  };

  return <TextInput {...allProps} />;
};
