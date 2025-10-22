
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
const ANDROID_CLIENT_ID =
  '1099098264007-thb39j1g2ilg74mvrquruu01iaifj9e1.apps.googleusercontent.com';
const IOS_CLIENT_ID = '';

// Opcional (quando executando via Expo Go)
const EXPO_CLIENT_ID =
  '1099098264007-sal5p8vma3t5fqk1gqql4sk2sns4iuq7.apps.googleusercontent.com';

// =========================================
// Componente: Login para Nativo (Android/iOS)
// =========================================
const LoginNative = () => {
  const [loading, setLoading] = React.useState(false);

  // hook mais simples → retorna id_token diretamente
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    expoClientId: EXPO_CLIENT_ID,
    selectAccount: true,
  });

  React.useEffect(() => {
    if (!response) return;

    if (response.type === 'success') {
      const idToken = response.params?.id_token as string | undefined;
      setLoading(false);
      if (idToken) {
        // aqui você autentica no backend/Firebase se quiser
        // ex.: GoogleAuthProvider.credential(idToken)
        console.log('Login OK', 'idToken: ' + idToken.slice(0, 18));
        console.log('[LoginNative] id_token:', idToken);
      } else {
        console.log('Aviso', 'Login concluído, mas sem id_token.');
      }
    } else if (response.type === 'error') {
      setLoading(false);
      const msg = (response as any)?.error ?? 'Erro ao autenticar com Google.';
      console.log('Erro no login', String(msg));
      console.error('[LoginNative] error:', msg);
    } else {
      // cancelled / dismissed
      setLoading(false);
    }
  }, [response]);

  const handlePress = async () => {
    try {
      setLoading(true);
      await promptAsync();
    } catch (err) {
      setLoading(false);
      console.log('Erro', String(err));
      console.error('[LoginNative] promptAsync error:', err);
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
