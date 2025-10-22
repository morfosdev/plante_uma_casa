
// ---------- import Packs
import React from 'react';
import { Pressable, Text } from 'react-native';

// ---------- import Local Tools
import { getStlValues, mapElements } from '../project';

type Tprops = {
  pass: {
    elementProperties: any;
    styles: any;
    childrenItems: any;
    pressableFunctions: any;
    args: any;
  };
};

// Login
export const Login = (props: Tprops) => {
  console.log('INICIO DO LOGIN', { props });

  // ---------- set Props
  const { arrFuncs, configs, args } = props.pass;

  // ---------- set Variables Styles (If Exists)

  // ---------- set Actions
  const btn = async () => {
    console.log('clicou no btn signin');
  };

  // ---------- set Children Items

  // ------- set User Element Properties (If Exists)
  const userElProps = {};

  const allProps = {
    style: {
      backgroundColor: '#315e2d',
      width: 60,
      height: 26,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    onPress: btn,
  };

  // ---------- set Render
  return (
    <Pressable {...allProps}>
      <Text style={{ color: '#fff', fontSize: 12 }}>Login Google</Text>
    </Pressable>
  );
};

