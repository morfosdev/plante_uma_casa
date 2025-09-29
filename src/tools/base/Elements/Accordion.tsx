
import React from 'react';
import { Pressable, View } from 'react-native';

export const Accordion = props => {
  const [open, setOpen] = React.useState(false);
  const { configs, arrElements } = props.pass;

  console.log('Accordion', { props });
  return (
    <>
      {arrElements.map((Item, idx) => {
        return (
          <Pressable key={idx} onPress={() => setOpen(e => !e)}>
            <ItemAcc open={open}>{Item()}</ItemAcc>
          </Pressable>
        );
      })}
    </>
  );
};

const ItemAcc = props => {
  const { open } = props;
  return (
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
  );
};

