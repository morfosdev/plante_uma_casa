
// ---------- import Packs
import React from 'react';
import {
  Platform,
  Pressable,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

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

// ---------- IDs do Google OAuth por plataforma (preencha!)
const GOOGLE_WEB_CLIENT_ID =
  '1099098264007-sal5p8vma3t5fqk1gqql4sk2sns4iuq7.apps.googleusercontent.com';
const GOOGLE_ANDROID_CLIENT_ID =
  '1099098264007-thb39j1g2ilg74mvrquruu01iaifj9e1.apps.googleusercontent.com';
const GOOGLE_IOS_CLIENT_ID = '';

// Opcional (quando executando via Expo Go)
const GOOGLE_EXPO_CLIENT_ID =
  '1099098264007-sal5p8vma3t5fqk1gqql4sk2sns4iuq7.apps.googleusercontent.com';

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
