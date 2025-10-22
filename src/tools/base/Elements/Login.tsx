
// ---------- import Packs
import React from 'react';
import { Pressable } from 'react-native';

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
    onPress: btn,
  };

  // ---------- set Render
  return <Pressable {...allProps} />;
};
