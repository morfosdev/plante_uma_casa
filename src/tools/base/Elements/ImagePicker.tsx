
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

  return <RN.Text>upload</RN.Text>;
};

