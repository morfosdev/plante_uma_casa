
import React from 'react';
import * as RN from 'react-native';

export const Accordion = props => {
  const { arrElements } = props.pass;

  console.log('Accordion', { props });
  return (
    <>
      {arrElements.map((Item, idx) => {
        return Item();
      })}
    </>
  );
};
