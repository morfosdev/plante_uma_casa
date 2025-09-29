
import React from 'react';
import JSON5 from 'json5';
import { Pressable, View } from 'react-native';

export const Accordion = props => {
  const { configs, arrElements } = props.pass ?? {};

  // parse seguro para aceitar string/objeto/array
  const safeParse = v => {
    if (!v) return {};
    if (typeof v === 'string') {
      try { return JSON5.parse(v) || {}; } catch { return {}; }
    }
    return typeof v === 'object' ? (v || {}) : {};
  };

  const cfg0 = Array.isArray(configs) ? safeParse(configs[0]) : safeParse(configs);
  const items = Array.isArray(arrElements) ? arrElements : [];

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  const [openIdx, setOpenIdx] = React.useState(() => {
    if (!items.length) return null;
    // Se quiser começar sem nenhum aberto, troque o "0" por null
    let idx = Number.isInteger(cfg0?.defaultOpenIdx) ? cfg0.defaultOpenIdx : 0;
    if (idx == null) return null;
    return clamp(idx, 0, items.length - 1);
  });

  const handleToggle = idx => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  console.log('Accordion', { props, openIdx, cfg0 });

  return (
    <>
      {items.map((Item, idx) => {
        const isOpen = openIdx === idx;
        const child = typeof Item === 'function' ? Item() : Item; // compatível com Item() ou <Item />
        return (
          <ItemAcc key={idx} open={isOpen} onToggle={() => handleToggle(idx)}>
            {child}
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

