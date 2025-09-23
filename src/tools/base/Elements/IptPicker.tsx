
// src/components/InputPicker.tsx
import JSON5 from 'json5';
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

// ---------- import Local Tools
import { getStlValues, mapElements, getVarValue, pathSel } from '../project';
import { useData } from '../../..';

type Item = {
  label: string;
  value: string | number | null;
  disabled?: boolean;
};

type InputPickerProps = {
  /** Caminho no store para o array de opções */
  pathItems: string;

  /** Opcional: caminho para o valor selecionado (string/number/null) */
  pathValue?: string;

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
  pass: {
    args: any;
    configs: string[]; // configs[0] é um JSON5 com InputPickerProps
    /** Cada função recebe (value, item, args) */
    arrFuncs?: Array<
      (value: Item['value'], item: Item | null, args: any) => void
    >;
  };
};

export const IptPicker: React.FC<Tprops> = props => {
  const { configs, arrFuncs = [], args } = props.pass;

  // Parse seguro (aceita campos extras sem quebrar)
  const obj0 = JSON5.parse(configs[0] || '{}') as Partial<InputPickerProps>;
  const {
    // props gerais
    placeholder = 'Selecionar...',
    maxVisibleItems = 6,
    searchable = true,
    style,
    inputStyle,
    dropdownStyle,
    itemStyle,
    itemTextStyle,
    emptyText = 'Nada encontrado',
    itemHeight = 44,
    pathItems = '',
    pathValue,
    disabled = false,
    testID,
  } = obj0;

  const { height: winH } = useWindowDimensions();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const wrapRef = useRef<View>(null);
  const inputRef = useRef<TextInput>(null);
  const listRef = useRef<FlatList<Item>>(null);
  const [wrapLayout, setWrapLayout] = useState<{
    y: number;
    x: number;
    h: number;
  }>({
    y: 0,
    x: 0,
    h: 0,
  });

  // ---------- Data bindings
  // Sempre chame hooks na mesma ordem:
  const items: Item[] =
    useData((ct: any) =>
      pathItems ? (pathSel(ct, pathItems) as Item[]) : [],
    ) || [];

  const selectedValue: Item['value'] = useData((ct: any) =>
    pathValue ? (pathSel(ct, pathValue) as Item['value']) : null,
  );

  // Funções de saída (evita "e is not a function")
  const emitChange = useCallback(
    (val: Item['value'], it: Item | null) => {
      for (const fn of arrFuncs) {
        if (typeof fn === 'function') {
          try {
            fn(val, it, args);
          } catch (err) {
            console.error('[IptPicker] erro no handler:', err);
          }
        }
      }
    },
    [arrFuncs, args],
  );

  const currentItem = useMemo(
    () => items.find(it => it.value === selectedValue) ?? null,
    [items, selectedValue],
  );

  const normalized = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(it => (it.label ?? '').toLowerCase().includes(q));
  }, [items, query]);

  const visibleCount = Math.min(normalized.length || 1, maxVisibleItems);
  const listHeight = visibleCount * itemHeight;

  const openUpwards = useMemo(() => {
    const spaceBelow = winH - (wrapLayout.y + wrapLayout.h);
    return spaceBelow < listHeight + (searchable ? 44 : 0) + 8;
  }, [winH, wrapLayout, listHeight, searchable]);

  // medir wrapper
  const onWrapLayout = (e: LayoutChangeEvent) => {
    const { y, x, height } = e.nativeEvent.layout;
    setWrapLayout({ y, x, h: height });
  };

  // click fora (web)
  useEffect(() => {
    if (Platform.OS !== 'web' || !open) return;

    const onDocMouseDown = (ev: MouseEvent) => {
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
      const sub = Keyboard.addListener('keyboardDidHide', () => {});
      return () => sub.remove();
    }
  }, [open]);

  const commitSelection = useCallback(
    (item: Item | null) => {
      emitChange(item ? item.value : null, item);
      setOpen(false);
      setQuery('');
      setHoverIndex(-1);
    },
    [emitChange],
  );

  const toggleOpen = useCallback(() => {
    // Se o input está desabilitado OU o item atual é desabilitado, não abre
    const blocked = disabled || !!currentItem?.disabled;
    if (blocked) return;

    setOpen(p => !p);
    if (!open && searchable) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [disabled, currentItem, open, searchable]);

  // navegação por teclado (web)
  useEffect(() => {
    if (Platform.OS !== 'web' || !open) return;

    const scrollIntoView = (idx: number) => {
      if (!listRef.current) return;
      listRef.current.scrollToIndex({
        index: idx,
        viewPosition: 0.5,
        animated: false,
      });
    };

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

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, normalized, hoverIndex, commitSelection]);

  const renderItem = ({ item, index }: { item: Item; index: number }) => {
    const isSelected = selectedValue === item.value;
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

  const inputIsDisabled = disabled || !!currentItem?.disabled;

  return (
    <View
      ref={wrapRef}
      onLayout={onWrapLayout}
      style={[{ position: 'relative' }, style]}
      {...(Platform.OS === 'web'
        ? { role: 'combobox', 'aria-expanded': open, 'data-testid': testID }
        : {})}
    >
      <Pressable
        onPress={toggleOpen}
        disabled={inputIsDisabled}
        accessibilityRole="button"
        accessibilityState={{ disabled: inputIsDisabled, expanded: open }}
        style={[
          {
            minHeight: 44,
            paddingHorizontal: 12,
            borderWidth: 1,
            borderColor: inputIsDisabled ? '#e0e0e0' : '#cfcfcf',
            backgroundColor: inputIsDisabled ? '#f7f7f7' : '#fff',
            borderRadius: 10,
            justifyContent: 'center',
          },
          inputStyle as any,
        ]}
      >
        <Text style={{ color: currentItem ? '#111' : '#777', fontSize: 14 }}>
          {currentItem?.label ?? placeholder}
        </Text>
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
            zIndex: 9999,
            top: openUpwards ? undefined : wrapLayout.h + 6,
            bottom: openUpwards ? wrapLayout.h + 6 : undefined,
          }}
        >
          {DropdownContent}
        </View>
      )}

      {/* NATIVE: Modal de tela cheia */}
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

