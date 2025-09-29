
import React from 'react';
import { Pressable, View } from 'react-native';

export const Accordion = props => {
  const { configs, arrElements } = props.pass;

  console.log('Accordion', { props });
  return (
    <>
      {arrElements.map((Item, idx) => {
        return <ItemAcc key={idx}>{Item()}</ItemAcc>;
      })}
    </>
  );
};

const ItemAcc = props => {
  const [open, setOpen] = React.useState(false);

  return (
    <Pressable onPress={() => setOpen(e => !e)}>
      <View
        style={{
          backgroundColor: 'red',
          width: 260,
          height: open ? 'auto' : 30,
          borderRadius: 10,
          overflow: 'hidden',
        }}
      >
        {props.children}
      </View>
    </Pressable>
  );
};
