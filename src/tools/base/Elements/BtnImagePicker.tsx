
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type Tprops = {
  pass: {
    variable?: string[]; // opcional: lista inicial
    childrenItems?: any[]; // não usado aqui
    arrFuncs?: any[]; // não usado aqui
    args?: any; // não usado aqui
    onChange?: (uris: string[]) => void; // callback opcional
    max?: number; // limite opcional
  };
};

export const BtnImagePicker = (props: Tprops) => {
  const isWeb = RN.Platform.OS === 'web';
  return isWeb ? <BtnImgPicWeb {...props} /> : <BtnImgPicNat {...props} />;
};

/* ---------------- WEB ---------------- */
const BtnImgPicWeb = ({ pass }: Tprops) => {
  const { variable = [], onChange, max, arrFuncs, args } = pass || {};
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [images, setImages] = React.useState<string[]>(variable);

  // revoke URLs ao desmontar
  React.useEffect(() => {
    if (arrFuncs) {
      for (const currFunc of arrFuncs) currFunc(images, args);
    }
    return () => images.forEach(u => URL.revokeObjectURL(u));
  }, [images]);

  const pickWeb = () => inputRef.current?.click();

  const handleWebFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fl = event.target.files;
    if (!fl) return;
    const selected = Array.from(fl).map(f => URL.createObjectURL(f));
    const merged = max
      ? [...images, ...selected].slice(0, max)
      : [...images, ...selected];
    setImages(merged);
    onChange?.(merged);
    // limpa o input pra permitir re-selecionar os mesmos arquivos
    event.target.value = '';
  };

  const removeAt = (idx: number) => {
    const clone = [...images];
    const [rm] = clone.splice(idx, 1);
    if (rm?.startsWith('blob:')) URL.revokeObjectURL(rm);
    setImages(clone);
    onChange?.(clone);
  };

  return (
    <>
      <RN.View style={styles.container}>
        <ThumbGrid images={images} onRemove={removeAt} />
        <RN.Text style={styles.title}>Adicionar Imagens</RN.Text>
        <RN.Text style={styles.subtitle}>
          Selecione ou tire fotos para mostrar o progresso
        </RN.Text>
        <RN.Pressable style={styles.btn} onPress={pickWeb}>
          <RN.Text style={styles.btnTxt}>Adicionar</RN.Text>
        </RN.Pressable>
      </RN.View>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={handleWebFile}
      />
    </>
  );
};

/* --------------- NATIVO --------------- */
const BtnImgPicNat = ({ pass }: Tprops) => {
  const { variable = [], onChange, max, arrFuncs, args } = pass || {};
  const [images, setImages] = React.useState<string[]>(variable);

  React.useEffect(() => {
    if (arrFuncs) {
      for (const currFunc of arrFuncs) currFunc(images, args);
    }
    return () => setImages([]); // limpa ao desmontar
  }, [images]);

  const pickNative = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a galeria foi negada');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true, // múltiplas
      selectionLimit: max ?? 0, // 0 = sem limite (iOS). Ignorado em algumas versões
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const picked = result.assets.map(a => a.uri);
      const merged = max
        ? [...images, ...picked].slice(0, max)
        : [...images, ...picked];
      setImages(merged);
      onChange?.(merged);
    }
  };

  const removeAt = (idx: number) => {
    const clone = [...images];
    clone.splice(idx, 1);
    setImages(clone);
    onChange?.(clone);
  };

  return (
    <RN.View style={styles.container}>
      <ThumbGrid images={images} onRemove={removeAt} />
      <RN.Text style={styles.title}>Adicionar Imagens</RN.Text>
      <RN.Text style={styles.subtitle}>
        Selecione ou tire fotos para mostrar o progresso
      </RN.Text>
      <RN.Pressable style={styles.btn} onPress={pickNative}>
        <RN.Text style={styles.btnTxt}>Adicionar</RN.Text>
      </RN.Pressable>
    </RN.View>
  );
};

/* ------- Grade de miniaturas reutilizável ------- */
const ThumbGrid = ({
  images,
  onRemove,
}: {
  images: string[];
  onRemove: (idx: number) => void;
}) => {
  if (!images.length) return null;
  return (
    <RN.View style={thumb.grid}>
      {images.map((uri, idx) => (
        <RN.View key={uri + idx} style={thumb.item}>
          <RN.Image source={{ uri }} style={thumb.img} />
          <RN.Pressable
            hitSlop={8}
            style={thumb.x}
            onPress={() => onRemove(idx)}
          >
            <RN.Text style={thumb.xTxt}>×</RN.Text>
          </RN.Pressable>
        </RN.View>
      ))}
    </RN.View>
  );
};

/* ---------------- STYLES ---------------- */
const styles = RN.StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: '#D5DBE3',
    borderRadius: 12,
    borderWidth: 2,
    padding: 20,
    gap: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4B5563',
  },
  btn: {
    backgroundColor: '#E8EDF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 36,
    paddingHorizontal: 16,
  },
  btnTxt: {
    fontSize: 14,
    fontWeight: '700',
  },
});

const thumb = RN.StyleSheet.create({
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    columnGap: 10,
    rowGap: 10,
  },
  item: {
    position: 'relative',
    width: '45%',
    aspectRatio: 1.6,
    borderRadius: 6,
    overflow: 'hidden',
  },
  img: { width: '100%', height: '100%' },
  x: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  xTxt: { color: '#fff', fontSize: 16, lineHeight: 16, fontWeight: '700' },
});

