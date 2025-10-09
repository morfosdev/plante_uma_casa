
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import BtnImgPic from './BtnImgPic';

export const BtnImagePicker = (props: any) => {
  type Trender1 = null | React.JSX.Element;
  const [SttComp, SetComp] = React.useState<Trender1>(null);

  // ---------- set Props
  const { arrFuncs, args } = props.pass;

  return <BtnImgPic arrFuncs={arrFuncs} args={args} />;
};
