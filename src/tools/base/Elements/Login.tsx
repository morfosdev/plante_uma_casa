
// ---------- import Packs
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  Text,
  View,
} from 'react-native';

// Finaliza sessões pendentes (necessário para Web/Expo)
WebBrowser.maybeCompleteAuthSession();

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
const IOS_CLIENT_ID = '';

const ANDROID_CLIENT_ID =
  '1099098264007-thb39j1g2ilg74mvrquruu01iaifj9e1.apps.googleusercontent.com';

// =========================================
// Componente: Login para Nativo (Android/iOS)
// =========================================
export const LoginAndroid = () => {
  const [loading, setLoading] = React.useState(false);

  // Somente Android nativo
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    selectAccount: true,
  });

  React.useEffect(() => {
    if (!response) return;
    setLoading(false);

    if (response.type === 'success') {
      const idToken = response.params?.id_token as string | undefined;
      console.log('[LoginAndroid] id_token:', idToken);
      // -> autentique no backend/Firebase se desejar
    } else if (response.type === 'error') {
      console.error('[LoginAndroid] error:', (response as any)?.error);
    }
  }, [response]);

  const handlePress = async () => {
    try {
      setLoading(true);
      // Nativo: sem proxy
      await promptAsync({ useProxy: false });
    } catch (err) {
      setLoading(false);
      console.error('[LoginAndroid] promptAsync error:', err);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Pressable
        onPress={handlePress}
        disabled={!request || loading}
        style={{
          backgroundColor: '#315e2d',
          paddingHorizontal: 20,
          height: 44,
          borderRadius: 999,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: !request || loading ? 0.7 : 1,
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '700' }}>
          {loading ? 'Conectando…' : 'Entrar com Google'}
        </Text>
      </Pressable>

      {loading ? <ActivityIndicator style={{ marginTop: 8 }} /> : null}
    </View>
  );
};

// =========================================
// Componente: Login para Web
// =========================================
const LoginWeb = () => {
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
    return <LoginWeb />;
  }
  return <LoginNative />;
};

