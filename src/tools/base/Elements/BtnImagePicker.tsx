
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

  type Trender1 = null | React.JSX.Element;
  const [SttComp, SetComp] = React.useState<Trender1>(null);

  // ---------- set Props
  const { arrFuncs, args } = props.pass;

  // ---------- CORREÇÃO: decide uma única vez
  if (!SttComp) {
    if (isWeb && typeof document !== 'undefined') {
      SetComp(importRender({ type: 'web', arrFuncs, args }));
    } else {
      // vale para android/ios (nativo)
      SetComp(importRender({ type: 'native', arrFuncs, args }));
    }
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

