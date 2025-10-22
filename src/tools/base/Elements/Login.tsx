
// ---------- import Packs
import React from 'react';
import {
  Platform,
  Pressable,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';

// Finaliza sessões pendentes (necessário para Web/Expo)
// WebBrowser.maybeCompleteAuthSession();

// ---------- import Local Tools (se usar)
// import { getStlValues, mapElements } from '../project';

type Tprops = {
  pass: {
    arrFuncs?: {};
    configs?: string[];
    args?: {};
  };
};

// =========================================
// Componente: Login para Nativo (Android/iOS)
// =========================================
const LoginNative = ({ args }: { args?: Tprops['pass']['args'] }) => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    (async () => {})();
  }, []);

  const handlePress = async () => {
    try {
      setLoading(true);
      await promptAsync();
    } catch (err) {
      args?.onLoginError?.(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>{'Native'}</Text>
    </View>
  );
};

// =========================================
// Componente: Login para Web
// =========================================
const LoginWeb = ({ args }: { args?: Tprops['pass']['args'] }) => {
  React.useEffect(() => {
    (async () => {})();
  }, []);

  const handlePress = async () => {};

  return (
    <View style={{ alignItems: 'center' }}>
      <Text>{'WEB'}</Text>
    </View>
  );
};

// =========================================
// Wrapper: decide por plataforma
// =========================================
export const Login = (props: Tprops) => {
  const args = props?.pass?.args;
  const [loading, setLoading] = React.useState(false);

  // (Se precisar, aplique estilos vindos de props.pass.styles usando getStlValues)
  // const baseStyle = getStlValues(props.pass.styles) // exemplo

  if (Platform.OS === 'web') {
    return <LoginWeb args={args} />;
  }
  return <LoginNative args={args} />;
};
