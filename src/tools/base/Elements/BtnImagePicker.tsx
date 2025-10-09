
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import { BtnImgPicWeb, BtnImgPicNat } from './localModules';

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

  // ---------- set Props
  const { arrFuncs, args } = props.pass;

  console.log({ arrFuncs, args, isWeb });

  return (
    <>
      {isWeb && typeof document !== 'undefined' && (
        <BtnImgPicWeb arrFuncs={arrFuncs} args={args} />
      )}
      {isAndroid && <BtnImgPicNat arrFuncs={arrFuncs} args={args} />}
    </>
  );
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
