
import React from 'react';
import JSON5 from 'json5';
import { Pressable, View, Text } from 'react-native';

export const Accordion = props => {
  const { configs, arrElements } = props.pass ?? {};

  // parse seguro (string/objeto/array)
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
    // troque 0 por null se quiser iniciar fechado quando não vier defaultOpenIdx
    let idx = Number.isInteger(cfg0?.defaultOpenIdx) ? cfg0.defaultOpenIdx : 0;
    if (idx == null) return null;
    return clamp(idx, 0, items.length - 1);
  });

  const handleToggle = idx => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  // Garante que cada entrada vire um React element válido
  const asChild = (Item, idx) => {
    try {
      if (typeof Item === 'function') {
        const out = Item();
        if (React.isValidElement(out)) return out;
        if (typeof out === 'string' || typeof out === 'number') return <Text>{String(out)}</Text>;
        console.warn('Accordion: função no idx %s não retornou elemento válido.', idx, out);
        return null;
      }
      if (React.isValidElement(Item)) return Item;
      if (typeof Item === 'string' || typeof Item === 'number') return <Text>{String(Item)}</Text>;
      console.warn('Accordion: item inválido no idx %s.', idx, Item);
      return null;
    } catch (e) {
      console.error('Accordion: erro ao renderizar item %s ->', idx, e);
      return null;
    }
  };

  console.log('Accordion', { props, openIdx, cfg0 });

  return (
    <>
      {items.map((Item, idx) => {
        const isOpen = openIdx === idx;
        const child = asChild(Item, idx);
        if (!child) return null;
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
          // Em RN nativo evite 'auto'; usar undefined remove a prop.
          height: open ? undefined : 30,
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

