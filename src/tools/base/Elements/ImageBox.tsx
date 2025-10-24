
// ---------- import Packs
import JSON5 from 'json5';
import { Image } from 'react-native';

// ---------- import Local Tools
import { useData } from '../../..';
import { getStlValues, getVarValue, pathSel } from '../project';

type Tprops = {
  pass: {
    elementsProperties: any[];
    styles: any;
    URIvariablePath: string[]; // ex.: ['all','authUser','userImage']
    args: any;
  };
};

function checkUrl(str?: string) {
  try { if (typeof str !== 'string') return false; new URL(str); return true; }
  catch { return false; }
}

const defaultUri =
  'https://www.budgetbatteries.com.au/wp-content/uploads/2021/12/Budget-batteries-placeholder.jpg';

const findFlatItem = (obj: any): any => {
  if (typeof obj !== 'object' || obj === null) return null;
  if ('item' in obj) return obj.item;
  for (const k in obj) {
    const v = obj[k];
    if (Array.isArray(v)) {
      for (const el of v) {
        const found = findFlatItem(el);
        if (found) return found;
      }
    } else if (typeof v === 'object') {
      const found = findFlatItem(v);
      if (found) return found;
    }
  }
  return null;
};

const testArgs = (children: string[], args: any) => {
  let condChildren: 'arg' | 'var' | '' = '';
  let newArgChildren = '';

  const joinedChild = children.join('');
  if (joinedChild.includes('$var_')) condChildren = 'var';
  if (joinedChild.includes('$arg_')) condChildren = 'arg';

  if (condChildren === 'arg') {
    const key = joinedChild.split('_')[1]; // $arg_key
    const foundItem = findFlatItem(args);
    if (foundItem && key in foundItem) newArgChildren = String(foundItem[key]);
  }

  return { condChildren, newArgChildren };
};

// Element Image
export const ImageBox = (props: Tprops) => {
  const { elementsProperties = [], styles, URIvariablePath = [], args } = props.pass;

  // 1) Caminho base: use '.' (não vírgula)
  let keyOrUri = Array.isArray(URIvariablePath)
    ? URIvariablePath.join('.')
    : String(URIvariablePath ?? '');

  // 2) Interpretação de $arg_ / $var_
  const { condChildren, newArgChildren } = testArgs([keyOrUri], args);

  if (condChildren === 'var') {
    // $var_all.authUser.userImage  -> vira caminho em string
    keyOrUri = keyOrUri.replace('$var_', '');
  } else if (condChildren === 'arg' && newArgChildren) {
    // Pode ser URL direta ou caminho para usar no pathSel
    keyOrUri = newArgChildren;
  }

  // 3) Obter valor reativo SEM hook condicional
  const watchData = useData(ct =>
    checkUrl(keyOrUri) ? keyOrUri : pathSel(ct, keyOrUri)
  );

  // 4) Montagem de estilo e props do usuário
  const stl = getStlValues(styles);
  const userElProps: Record<string, any> = {};
  for (const strObj of elementsProperties) {
    if (!strObj || typeof strObj !== 'string') continue;
    const parsed = JSON5.parse(strObj);
    for (const k in parsed) {
      const v = parsed[k];
      const [hasVar, varValue] = getVarValue(v, 'Component');
      userElProps[k] = hasVar ? varValue : v;
    }
  }

  // 5) URI final
  const condFinalURI = checkUrl(keyOrUri) ? keyOrUri : (watchData ?? defaultUri);

  const allProps = {
    source: { uri: condFinalURI },
    style: [stl],
    resizeMode: 'cover' as const,
    ...userElProps,
  };

  return <Image {...allProps} />;
};
