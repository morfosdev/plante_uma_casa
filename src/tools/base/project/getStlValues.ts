
// ---------- import Packs
import { Style, getStylesForProperty } from "css-to-react-native";
import JSON5 from "json5";

// ---------- import Local Tools
import { getVarValue } from "./getVarValue";

// ----------- set Style Variable Selection
export const getStlValues = (arrGetValues: string[]) => {
  if (!Array.isArray(arrGetValues)) {
    return {};
  }

  const arrStyles = arrGetValues
    .filter((value) => {
      if (!value) return false;
      const trimmed = String(value).trim();
      // Valida se é JSON (começa com { ou [)
      return trimmed.startsWith("{") || trimmed.startsWith("[");
    })
    .map((value) => {
      if (typeof value !== "string") {
        value = JSON.stringify(value);
      }

      const trimmedString = value.trim();

      try {
        const parsedObject = JSON5.parse(trimmedString);
        return parsedObject;
      } catch (error) {
        console.warn("Failed to parse style:", trimmedString, error);
        return {};
      }
    });

  const allStls = arrStyles.flatMap((style) => {
    if (style.shadowOffset) return style;

    const possibleValues = Object.keys(style);

    const setPx = (stlVal: any) => {
      const checkNum = typeof stlVal === "number";
      const condVal = checkNum ? String(stlVal) + "px" : stlVal;

      return condVal;
    };

    const result = possibleValues.flatMap((key) => {
      const stlVal = style[key];

      const [condVar, varValue] = getVarValue(stlVal, "noComponent");

      if (!condVar) {
        const valToPx = String(setPx(stlVal));
        const process2 = getStylesForProperty(key, valToPx);

        return process2;
      }

      const varToPx = String(setPx(varValue));
      const process3 = getStylesForProperty(key, varToPx, true);

      return process3;
    });

    return result as Style[];
  });

  return allStls;
};

