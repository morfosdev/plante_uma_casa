
import JSON5 from "json5";
import React from "react";
import { Pressable, Text } from "react-native";

import { useData } from "../../..";
import { pathSel } from "../project";

const findFlatItem = (obj: any): any => {
  if (typeof obj !== "object" || obj === null) return null;
  if ("item" in obj) return obj.item;
  for (const k in obj) {
    const v = obj[k];
    if (Array.isArray(v)) {
      for (const el of v) {
        const found = findFlatItem(el);
        if (found) return found;
      }
    } else if (typeof v === "object") {
      const found = findFlatItem(v);
      if (found) return found;
    }
  }
  return null;
};

const testArgs = (children: string[], args: any) => {
  let condChildren: "arg" | "var" | "" = "";
  let newArgChildren = "";

  const joinedChild = children.join("");
  if (joinedChild.includes("$var_")) condChildren = "var";
  if (joinedChild.includes("$arg_")) condChildren = "arg";

  if (condChildren === "arg") {
    const key = joinedChild.split("_")[1]; // $arg_key
    const foundItem = findFlatItem(args);
    if (foundItem && key in foundItem) newArgChildren = String(foundItem[key]);
  }

  return { condChildren, newArgChildren };
};

export const Accordion = (props) => {
  const { configs, arrElements, args } = props.pass ?? {};

  // parse seguro (string/objeto/array)
  const safeParse = (v) => {
    if (!v) return {};
    if (typeof v === "string") {
      try {
        return JSON5.parse(v) || {};
      } catch {
        return {};
      }
    }
    return typeof v === "object" ? v || {} : {};
  };

  const cfg0 = Array.isArray(configs)
    ? safeParse(configs[0])
    : safeParse(configs);
//   const items = Array.isArray(arrElements) ? arrElements : [];
  console.log("Accordion configs:", { cfg0 });

  let keyOrUri = Array.isArray(cfg0.data)
    ? cfg0.data.join(".")
    : String(cfg0.data ?? "");

  const { condChildren, newArgChildren } = testArgs([keyOrUri], args);

  if (condChildren === "var") {
    keyOrUri = keyOrUri.replace("$var_", "");
  } else if (condChildren === "arg" && newArgChildren) {
    keyOrUri = newArgChildren;
  }

  const items = useData((ct) => pathSel(ct, keyOrUri) ?? []);

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const [openIdx, setOpenIdx] = React.useState(() => {
    if (!items.length) return null;
    // troque 0 por null se quiser iniciar fechado quando não vier defaultOpenIdx
    let idx = Number.isInteger(cfg0?.defaultOpenIdx) ? cfg0.defaultOpenIdx : 0;
    if (idx == null) return null;
    return clamp(idx, 0, items.length - 1);
  });

  const handleToggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  // Garante que cada entrada vire um React element válido
  const asChild = (Item, idx) => {
    try {
      if (typeof Item === "function") {
        const out = Item();
        if (React.isValidElement(out)) return out;
        if (typeof out === "string" || typeof out === "number")
          return <Text>{String(out)}</Text>;
        console.warn(
          "Accordion: função no idx %s não retornou elemento válido.",
          idx,
          out
        );
        return null;
      }
      if (React.isValidElement(Item)) return Item;
      if (typeof Item === "string" || typeof Item === "number")
        return <Text>{String(Item)}</Text>;
      console.warn("Accordion: item inválido no idx %s.", idx, Item);
      return null;
    } catch (e) {
      console.error("Accordion: erro ao renderizar item %s ->", idx, e);
      return null;
    }
  };

  console.log("Accordion", { props, openIdx, cfg0 });
  const userStyles = cfg0?.styles ?? {};

  return (
    <>
      {items.map((Item, idx) => {
        const isOpen = openIdx === idx;
        const child = asChild(Item, idx);
        if (!child) return null;
        return (
          <ItemAcc
            userStyles={userStyles}
            key={idx}
            open={isOpen}
            onToggle={() => handleToggle(idx)}
          >
            {child}
          </ItemAcc>
        );
      })}
    </>
  );
};

const ItemAcc = (props) => {
  const { open, onToggle, userStyles } = props;

  return (
    <Pressable
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        marginBottom: 14,
        width: 260,

        ...userStyles,

        height: open ? undefined : 30,
        overflow: "hidden",
        minHeight: 30,
        padding: 0,
      }}
      onPress={onToggle}
    >
      {props.children}
    </Pressable>
  );
};

