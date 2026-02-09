
// ---------- import Packs
import JSON5 from "json5";
import { useEffect, useState } from "react";
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

// DynView / BOX
export const DynView = (props: Tprops) => {
  if (!props) return <></>;
  const { width, height } = useWindowDimensions();
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
  const condMobilePath = sttCondParts.path.replace("@media", condRespVar);
  let varValue = useData((ct) => pathSel(ct, condMobilePath));

  // ---------- set Props
  const { elementsProperties, functions } = props.pass;
  const { childrenItems, args } = props.pass;
  let { styles } = props.pass;

  // ---- Media Breakpoints
  console.log({ styles });
  if (Array.isArray(styles)) {
    styles = styles.map((style) => {
      if (typeof style !== "string") return style;

      if (isMobile) {
        // Pega o que vem após @mediaMobile
        const mobilePart = style.match(
          /@mediaMobiles*([sS]*?)(?=@mediaDesktop|$)/,
        );
        return mobilePart ? mobilePart[1] : style;
      } else {
        // Pega o que vem após @mediaDesktop
        const desktopPart = style.match(/@mediaDesktops*([sS]*?)$/);
        return desktopPart ? desktopPart[1] : style;
      }
    });
  } else if (typeof styles !== "string") {
    styles = [];
  }

  const callFn = async () => {
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
          console.log("VarPath", path);
          setCondParts({ path, operator, compareVal });
        }
      }
    }
  };

  useEffect(() => {
    callFn();
  }, []);

  // ---------- set Variables Styles (If Exists)
  console.log({ styles });
  const stl = getStlValues(styles);

  // ------- set User Element Properties (If Exists)
  const userElProps: any = {};
  for (let strObj of elementsProperties) {
    if (!strObj) continue;
    if (!props) continue;
    if (typeof strObj !== "string") continue;

    // Pula se não for um JSON válido (começa com { ou [)
    const trimmed = strObj.trim();
    if (!trimmed.startsWith("{") && !trimmed.startsWith("[")) continue;

    console.log({ strObj });
    const parsedObject = JSON5.parse(strObj);

    for (const keyProp in parsedObject) {
      const valueProp = parsedObject[keyProp];

      const [hasVar, varValue] = getVarValue(valueProp);

      if (hasVar) userElProps[keyProp] = varValue;
      if (!hasVar) userElProps[keyProp] = valueProp;
    }
  }

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
    const operators = {
      "==": (a, b) => a == b,
      "!=": (a, b) => a != b,
      ">": (a, b) => a > b,
      ">=": (a, b) => a >= b,
      "<": (a, b) => a < b,
      "<=": (a, b) => a <= b,
    };

    if (sttCondParts.path) console.log({ sttCondParts });

    const operatorFunc = operators[sttCondParts.operator];
    console.log({ operatorFunc });
    const condShow = operatorFunc?.(varValue, sttCondParts.compareVal);

    return (
      condShow && <View {...allProps}>{mapElements(childrenItems, args)}</View>
    );
  }
};
