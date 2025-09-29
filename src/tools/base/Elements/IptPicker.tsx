
import React from 'react';
import { Pressable, View } from 'react-native';
import JSON5 from 'json5';

export const Accordion = props => {
  const { configs, arrElements } = props.pass;

  const obj0 = JSON5.parse(configs[0] || '{}');
  const condObj = obj0?.defaultOpenIdx ?? 0;

  const [openIdx, setOpenIdx] = React.useState(condObj);

  const handleToggle = idx => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  console.log('Accordion', { props });
  return (
    <>
      {arrElements.map((Item, idx) => {
        return (
          <ItemAcc
            key={idx}
            open={openIdx === idx}
            onToggle={() => handleToggle(idx)}
          >
            {Item()}
          </ItemAcc>
        );
      })}
    </>
  );
};

const ItemAcc = props => {
  const { open, onToggle } = props;

  return (
    <Pressable onPress={onToggle}>
      <View
        style={{
          backgroundColor: 'red',
          width: 260,
          minHeight: 30,
          height: open ? 'auto' : 30,
          borderRadius: 10,
          marginBottom: 14,
          overflow: 'hidden',
        }}
      >
        {props.children}
      </View>
    </Pressable>
  );
};
