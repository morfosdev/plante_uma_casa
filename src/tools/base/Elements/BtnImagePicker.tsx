
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import { importRender } from './localModules';

type Tprops = {
  pass: {
    variable: string[];
    childrenItems: any[];
    arrFuncs: any[];
    args: any;
  };
};

export const BtnImagePicker = (props: Tprops) => {
  const isWeb = RN.Platform.OS === 'web';
  const isAndroid = RN.Platform.OS === 'android';

  type Trender1 = null | React.JSX.Element;
  const [SttComp, SetComp] = React.useState<Trender1>(null);

  // ---------- set Props
  const { arrFuncs, args } = props.pass;

  console.log({ arrFuncs, args, isWeb });

  // ---------- set WEB Component apenas se necessário
  if (isWeb && !SttComp) {
    SetComp(importRender({ type: 'web', arrFuncs, args }));
  }

  // ---------- set Native Component apenas se necessário
  if (!isAndroid && !SttComp) {
    SetComp(importRender({ type: 'native', arrFuncs, args }));
  }

  return <>{SttComp}</>;
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

