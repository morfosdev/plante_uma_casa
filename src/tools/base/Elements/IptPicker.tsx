
// src/components/InputPicker.tsx
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  Modal,
  Platform,
  StyleProp,
  ViewStyle,
  TextStyle,
  useWindowDimensions,
  Keyboard,
  LayoutChangeEvent,
} from 'react-native';

type Item = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

type InputPickerProps = {
  value?: Item['value'] | null;
  onChange: (value: Item['value'] | null, item: Item | null) => void;
  placeholder?: string;
  disabled?: boolean;
  searchable?: boolean;
  // estilos opcionais
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  itemTextStyle?: StyleProp<TextStyle>;
  emptyText?: string;
  maxVisibleItems?: number; // padrão 6
  itemHeight?: number; // padrão 44
  testID?: string;
};

type Tprops = {
  configs: string[];
  arrFuncs: () => {}[];
};

const items = [
  { label: 'Selecione…', value: '', disabled: true },
  { label: 'Opção A', value: 'A' },
  { label: 'Opção B', value: 'B' },
  { label: 'Opção C', value: 'C' },
  { label: 'Opção D', value: 'D' },
  { label: 'Opção E (desabilitada)', value: 'E', disabled: true },
];

export const IptPicker: React.FC<Tprops> = props => {
  console.log('IIPPTT PICKER', { props });
  const { configs, arrFuncs } = props;
  const obj0 = JSON.parse(configs[0]);
  console.log('IIPPTT PICKER', { obj0 });

  const {
    value = null,
    onChange = e => {
      console.log(e);
    },
    placeholder = 'Selecionar...',
    disabled = false,
    searchable = true,
    style,
    inputStyle,
    dropdownStyle,
    itemStyle,
    itemTextStyle,
    emptyText = 'Nada encontrado',
    maxVisibleItems = 6,
    itemHeight = 44,
    testID,
  } = configs;
  const { height: winH } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const wrapRef = useRef<View>(null);
  const inputRef = useRef<TextInput>(null);
  const listRef = useRef<FlatList>(null);
  const [wrapLayout, setWrapLayout] = useState<{
    y: number;
    x: number;
    h: number;
  }>({
    y: 0,
    x: 0,
    h: 0,
  });

  const currentItem = useMemo(
    () => items.find(it => it.value === value) ?? null,
    [items, value],
  );

  const normalized = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(it => it.label.toLowerCase().includes(q));
  }, [items, query]);

  const visibleCount = Math.min(normalized.length || 1, maxVisibleItems);
  const listHeight = visibleCount * itemHeight;

  const openUpwards = useMemo(() => {
    // abre pra cima se não há espaço suficiente pra baixo
    const spaceBelow = winH - (wrapLayout.y + wrapLayout.h);
    return spaceBelow < listHeight + 8;
  }, [winH, wrapLayout, listHeight]);

  // medir wrapper
  const onWrapLayout = (e: LayoutChangeEvent) => {
    const { y, x, height } = e.nativeEvent.layout;
    setWrapLayout({ y, x, h: height });
  };

  // click fora (web)
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    if (!open) return;

    const onDocMouseDown = (ev: MouseEvent) => {
      // Fecha se clique fora do wrapper
      const root = (wrapRef.current as any)?._node ?? (wrapRef.current as any);
      if (root && ev.target instanceof Node && !root.contains(ev.target)) {
        setOpen(false);
        setQuery('');
        setHoverIndex(-1);
      }
    };
    document.addEventListener('mousedown', onDocMouseDown);
    return () => document.removeEventListener('mousedown', onDocMouseDown);
  }, [open]);

  // fechar no back (Android) / teclado Esc (web)
  useEffect(() => {
    if (!open) return;

    if (Platform.OS === 'web') {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setOpen(false);
          setQuery('');
          setHoverIndex(-1);
        }
      };
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    } else {
      const sub = Keyboard.addListener('keyboardDidHide', () => {
        // nada obrigatório; mantemos aberto
      });
      return () => sub.remove();
    }
  }, [open]);

  const commitSelection = useCallback(
    (item: Item | null) => {
      onChange(item ? item.value : null, item);
      setOpen(false);
      setQuery('');
      setHoverIndex(-1);
    },
    [onChange],
  );

  const toggleOpen = useCallback(() => {
    if (disabled) return;
    setOpen(p => !p);
    if (!open && searchable) {
      // abre focando o input de busca
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [disabled, open, searchable]);

  // navegação por teclado (web)
  useEffect(() => {
    if (Platform.OS !== 'web') return;
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', 'ArrowUp', 'Enter'].includes(e.key)) e.preventDefault();

      if (e.key === 'ArrowDown') {
        setHoverIndex(i => {
          const next = Math.min((i < 0 ? -1 : i) + 1, normalized.length - 1);
          scrollIntoView(next);
          return next;
        });
      } else if (e.key === 'ArrowUp') {
        setHoverIndex(i => {
          const next = Math.max(i - 1, 0);
          scrollIntoView(next);
          return next;
        });
      } else if (e.key === 'Enter') {
        const item = normalized[hoverIndex];
        if (item && !item.disabled) commitSelection(item);
      }
    };

    const scrollIntoView = (idx: number) => {
      if (!listRef.current) return;
      listRef.current.scrollToIndex({
        index: idx,
        viewPosition: 0.5,
        animated: false,
      });
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, normalized, hoverIndex, commitSelection]);

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const isSelected = value === item.value;
    const isHover = index === hoverIndex;
    const isDisabled = !!item.disabled;

    return (
      <Pressable
        onPress={() => !isDisabled && commitSelection(item)}
        onHoverIn={() => Platform.OS === 'web' && setHoverIndex(index)}
        disabled={isDisabled}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, selected: isSelected }}
        style={[
          {
            height: itemHeight,
            paddingHorizontal: 12,
            justifyContent: 'center',
            backgroundColor: isHover ? '#f2f2ff' : '#fff',
            opacity: isDisabled ? 0.5 : 1,
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
          },
          itemStyle,
        ]}
      >
        <Text
          style={[
            { fontSize: 14, color: '#111' },
            isSelected && { fontWeight: '600' },
            itemTextStyle,
          ]}
        >
          {item.label}
        </Text>
      </Pressable>
    );
  };

  const keyExtractor = (it: Item) => String(it.value);

  // conteúdo do dropdown (web e dentro do Modal no native)
  const DropdownContent = (
    <View
      style={[
        {
          width: '100%',
          maxHeight: listHeight + (searchable ? 44 : 0) + 8,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#dcdcdc',
          backgroundColor: '#fff',
          overflow: 'hidden',
          // sombra cross-plataforma
          shadowColor: '#000',
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 12,
          elevation: 8,
        },
        dropdownStyle,
      ]}
    >
      {searchable && (
        <View
          style={{
            padding: 8,
            borderBottomWidth: 1,
            borderBottomColor: '#efefef',
          }}
        >
          <TextInput
            ref={inputRef}
            value={query}
            onChangeText={t => {
              setQuery(t);
              setHoverIndex(t ? 0 : -1);
            }}
            placeholder="Buscar…"
            style={
              {
                height: 36,
                paddingHorizontal: 10,
                borderWidth: 1,
                borderColor: '#e2e2e2',
                borderRadius: 8,
                fontSize: 14,
                outlineStyle: Platform.OS === 'web' ? 'none' : undefined,
              } as any
            }
            // web a11y
            {...(Platform.OS === 'web'
              ? { 'aria-label': 'Campo de busca do seletor', role: 'searchbox' }
              : {})}
          />
        </View>
      )}
      {normalized.length === 0 ? (
        <View
          style={{
            height: listHeight,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: '#666', fontSize: 14 }}>{emptyText}</Text>
        </View>
      ) : (
        <FlatList
          ref={listRef}
          data={normalized}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          getItemLayout={(_, index) => ({
            index,
            length: itemHeight,
            offset: index * itemHeight,
          })}
          style={{ maxHeight: listHeight }}
          keyboardShouldPersistTaps="handled"
        />
      )}
    </View>
  );

  return (
    <View
      ref={wrapRef}
      onLayout={onWrapLayout}
      style={[{ position: 'relative' }, style]}
      // web a11y wrapper
      {...(Platform.OS === 'web'
        ? { role: 'combobox', 'aria-expanded': open, 'data-testid': testID }
        : {})}
    >
      <Pressable
        onPress={toggleOpen}
        disabled={disabled}
        accessibilityRole="button"
        accessibilityState={{ disabled, expanded: open }}
        style={[
          {
            minHeight: 44,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: disabled ? '#e0e0e0' : '#cfcfcf',
            backgroundColor: disabled ? '#f7f7f7' : '#fff',
            borderRadius: 10,
            justifyContent: 'center',
          },
          inputStyle as any,
        ]}
      >
        <Text style={{ color: currentItem ? '#111' : '#777', fontSize: 14 }}>
          {currentItem?.label ?? placeholder}
        </Text>
        {/* “ícone” simples em ASCII para não depender de libs */}
        <View
          style={{
            position: 'absolute',
            right: 10,
            top: 0,
            bottom: 0,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 12 }}>{open ? '▲' : '▼'}</Text>
        </View>
      </Pressable>

      {/* WEB: popover absoluto dentro do wrapper */}
      {Platform.OS === 'web' && open && (
        <View
          pointerEvents="box-none"
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 9999, // necessário no web
            top: openUpwards ? undefined : wrapLayout.h + 6,
            bottom: openUpwards ? wrapLayout.h + 6 : undefined,
          }}
        >
          {DropdownContent}
        </View>
      )}

      {/* NATIVE: Modal de tela cheia com backdrop e popover posicionado relativo ao wrapper */}
      {Platform.OS !== 'web' && (
        <Modal
          visible={open}
          transparent
          animationType="fade"
          onRequestClose={() => setOpen(false)}
        >
          <Pressable
            onPress={() => {
              setOpen(false);
              setQuery('');
              setHoverIndex(-1);
            }}
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.15)',
              justifyContent: openUpwards ? 'flex-end' : 'flex-start',
            }}
          >
            <View
              style={{
                paddingHorizontal: 12,
                paddingTop: openUpwards ? 0 : 8,
                paddingBottom: openUpwards ? 8 : 0,
              }}
            >
              {DropdownContent}
            </View>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};
