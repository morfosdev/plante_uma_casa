
import React from 'react';
import { View } from 'react-native';

export const Accordion = props => {
  const { arrElements } = props.pass;

  console.log('Accordion', { props });
  return (
    <>
      {arrElements.map((Item, idx) => {
        return <ItemAcc>{Item()}</ItemAcc>;
      })}
    </>
  );
};

const ItemAcc = props => {
  return (
    <View
      style={{
        backgroundColor: 'red',
        width: 260,
        height: 30,
        borderRadius: 10,
				marginBottom: 10
      }}
    >
      {props.children}
    </View>
  );
};
