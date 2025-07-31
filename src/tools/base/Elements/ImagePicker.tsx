
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native-web';

type Tprops = {
  pass: {
    variable: string[];
    childrenItems: any[];
    arrFuncs: any[];
    args: any;
  };
};
const css =
  'color: #54ff00; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';

export const ImagePicker = (props: Tprops) => {
  // ---------- set Props
  const { arrFuncs, args } = props.pass;
  console.log({ arrFuncs, args });

  return (
    <RN.Pressable>
      <RN.Text>Carregar Imagens</RN.Text>
    </RN.Pressable>
  );
};

