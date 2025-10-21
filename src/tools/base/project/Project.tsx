
// ---------- import React Packs
import React from 'react';
import * as RN from 'react-native';

import { SafeAreaView, Platform, View } from 'react-native';
import { StatusBar } from 'react-native';

// ---------- import Variables Pack

// ---------- import Local Tools
import { mapElements } from './mapElements';

// ---------- set Caps Inputs
type Tprops = {
  configData: {
    screens: any[];
    initCt: Record<string, any>;
    arrInitFuncs: (() => void)[];
  };
};

// ---------- set Main Component
export const Project = ({ configData }: Tprops) => {
  // ---------- set Data
  const { screens, arrInitFuncs } = configData;
  const condWeb = Platform.OS === 'web';

  // ---------- call Redirects (If Exists)
  React.useEffect(() => {
    if (condWeb) {
      const { pathname, search } = window.location;
      if (pathname.startsWith('/auth/setpassword')) {
        const qs = Object.fromEntries(new URLSearchParams(search).entries());

        // guarde params para a tela usar (confirmPasswordReset etc.)
        tools.setData({
          path: 'all.authData.passwordReset',
          value: {
            mode: qs.mode,
            oobCode: qs.oobCode,
            continueUrl: qs.continueUrl,
          },
        });

        tools.goTo('a0dsetpass');
      }
    }
  }, []);

  // ---------- call Functions (If Exists)
  React.useEffect(() => {
    const callFn = async () => {
      for (const currFunc of arrInitFuncs) await currFunc();
    };

    callFn().catch(err => console.log('Project Start Functions', { err }));
  }, []);

  const baseStl: RN.ViewStyle = {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  };

  return (
    <RN.View style={baseStl}>
      <SafeAreaView
        style={{ width: '100%', height: '100%', overflow: 'hidden' }}
      >
        {mapElements(screens)}

        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
    </RN.View>
  );
};
