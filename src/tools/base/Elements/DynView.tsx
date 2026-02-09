
// ---------- import Packs
import JSON5 from "json5";
import React, { useEffect, useState } from "react";
import { Pressable, useWindowDimensions, View } from "react-native";

// ---------- import Local Tools
import { useData } from "../../..";
import { getStlValues, getVarValue, mapElements, pathSel } from "../project";

export const css =
  "color: lightblue; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px";

type Tconds = "==" | "!=" | ">" | "<" | "<=" | ">=";
type Tprops = {
  pass: {
    elementsProperties: any;
    styles: string[];
    functions: any[];
    childrenItems: any;
    args: any;
  };
};

export const processFunctions = async (arr: any[]) => {
  const defaultVal = { trigger: "", arrFunctions: [] };

  for (const fn of arr) {
    if (typeof fn === "function") {
      const result = await fn();
      return result || defaultVal;
    }
  }

  return defaultVal;
};

const OPERATORS = {
  "==": (a, b) => a == b,
  "!=": (a, b) => a != b,
  ">": (a, b) => a > b,
  ">=": (a, b) => a >= b,
  "<": (a, b) => a < b,
  "<=": (a, b) => a <= b,
} as const;

// DynView / BOX
export const DynView = (props: Tprops) => {
  if (!props) return <></>;
  const { width } = useWindowDimensions();
  const isMobile = width < 767;

  const [sttTypeFunc, setTypeFunc] = useState("");
  const [sttCondParts, setCondParts] = useState({
    path: "",
    operator: "==",
    compareVal: null,
  });
  const [sttPressFuncs, setPressFuncs] = useState<
    Array<(args: any) => Promise<void>>
  >([]);

  const condRespVar = isMobile ? "mobile" : "desktop";

  const condRespPath = React.useMemo(() => {
    if (!sttCondParts.path) return "";
    const isSpecialChar = sttCondParts.path.includes("@");
    return isSpecialChar
      ? sttCondParts.path.replace("@media", condRespVar)
      : sttCondParts.path;
  }, [sttCondParts.path, condRespVar]);

  let varValue = useData((ct) =>
    condRespPath ? pathSel(ct, condRespPath) : null,
  );

  // ---------- set Props
  const { elementsProperties, functions } = props.pass;
  const { childrenItems, args } = props.pass;
  let { styles } = props.pass;

  // ---- Media Breakpoints
  const processedStyles = React.useMemo(() => {
    if (!Array.isArray(styles)) {
      return typeof styles === "string" ? [] : [];
    }

    return styles.map((style) => {
      if (typeof style !== "string") return style;

      if (isMobile) {
        const mobilePart = style.match(
          /@mediaMobiles*([sS]*?)(?=@mediaDesktop|$)/,
        );
        return mobilePart ? mobilePart[1] : style;
      } else {
        const desktopPart = style.match(/@mediaDesktops*([sS]*?)$/);
        return desktopPart ? desktopPart[1] : style;
      }
    });
  }, [styles, isMobile]);

  const callFn = React.useCallback(async () => {
    const { trigger, arrFunctions } = await processFunctions(functions);
    setTypeFunc(trigger);
    setPressFuncs(arrFunctions);

    // ------- set Init Functions (Capsules)
    if (trigger === "on init") {
      for (const currFunc of arrFunctions) await currFunc(args);
    }
    if (trigger === "on listen") {
      for (const currFunc of arrFunctions) {
        const res: [string, Tconds, any] = await currFunc(args);
        const path = res[0];
        const operator = res[1];
        const compareVal = res[2];

        if (typeof path === "string") {
          setCondParts({ path, operator, compareVal });
        }
      }
    }
  }, [functions, args]);

  useEffect(() => {
    callFn();
  }, []);

  // ---------- set Variables Styles (If Exists)
  const stl = getStlValues(processedStyles);

  // ------- set User Element Properties (If Exists)
  const userElProps = React.useMemo(() => {
    const props: any = {};

    for (let strObj of elementsProperties) {
      if (!strObj) continue;
      if (typeof strObj !== "string") continue;

      const trimmed = strObj.trim();
      if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) continue;

      try {
        const parsedObject = JSON5.parse(strObj);

        for (const keyProp in parsedObject) {
          const valueProp = parsedObject[keyProp];
          const [hasVar, varValue] = getVarValue(valueProp);

          if (hasVar) props[keyProp] = varValue;
          if (!hasVar) props[keyProp] = valueProp;
        }
      } catch (error) {
        // Silenciosamente ignora JSON inválido
      }
    }

    return props;
  }, [elementsProperties]);

  const allProps = {
    style: stl,
    ...userElProps,
  };

  // ---------- set Render
  if (!sttTypeFunc)
    return <View {...allProps}>{mapElements(childrenItems, args)}</View>;

  if (sttTypeFunc === "on press") {
    allProps.children = mapElements(childrenItems, args);
    allProps.onPress = async () => {
      for (const currFunc of sttPressFuncs) await currFunc(args);
    };

    return <Pressable {...allProps} />;
  }

  if (sttTypeFunc === "on init")
    return <View {...allProps}>{mapElements(childrenItems, args)}</View>;

  if (sttTypeFunc === "on listen") {
    const operatorFunc = OPERATORS[sttCondParts.operator];
    const condShow = operatorFunc?.(varValue, sttCondParts.compareVal);

    return (
      condShow && <View {...allProps}>{mapElements(childrenItems, args)}</View>
    );
  }
};
