
// ---------- import Packs
import JSON5 from "json5";
import React from "react";
import { TextInput } from "react-native";

// ---------- import Local Tools
import { useData } from "../../..";
import { getStlValues, getVarValue, pathSel, setData } from "../project";

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
  const [sttText, setText] = React.useState("");

  // Leitura do store (sempre segura; só vamos usar quando for o caso)
  const editData = useData((ct) => pathSel(ct, joinedPath));

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
  const getTxt = (val: string) => {
    if (!hasExternal) {
      // modo interno: só estado local
      setText(val);
      return;
    }

    // modo externo: mantém input responsivo e sincroniza store
    let masked: string | undefined;

    for (const fn of funcsArray) {
      try {
        const result = fn(val, args);

        // Se for Promise, trata como efeito colateral assíncrono
        if (result && typeof (result as any).then === "function") {
          (result as Promise<any>).catch((err) => {
            console.error("Erro em função externa async:", err);
          });
          continue;
        }

        // Se retornar string, usamos como máscara
        if (typeof result === "string" && result.length > 0) {
          masked = result;
        }
      } catch (err) {
        console.error("Erro em função externa:", err);
      }
    }

    const finalValue = masked ?? val;

    setText(finalValue);
    setData({ path: joinedPath, value: finalValue });
  };

  // ---------- Styles
  const stlsUser = getStlValues(stylesArray);

  // ---------- Extra props do usuário
  const userElProps: Record<string, any> = {};
  for (const strObj of propsArray) {
    if (!strObj || typeof strObj !== "string") continue;
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
    placeholder: "Escreva...",
    placeholderTextColor: "#ccc",
    ...userElProps,
  };

  return <TextInput {...allProps} />;
};
