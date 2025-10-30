
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type Tprops = {
  pass: {
    variable?: string[];                // lista inicial de previews (URIs) - só UI
    childrenItems?: any[];              // não usado
    arrFuncs?: Array<(payload: any, args?: any) => any | Promise<any>>; // callbacks que recebem FILES/ASSETS
    args?: any;                         // args repassados aos callbacks
    onChange?: (uris: string[]) => void;// callback UI com as URIs (previews)
    max?: number;                       // limite de itens
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

  // UI: previews
  const [images, setImages] = React.useState<string[]>(variable);
  // Upload: Files reais
  const [files, setFiles] = React.useState<File[]>([]);

  // Dispara callbacks sempre que os FILES mudam
  React.useEffect(() => {
    if (arrFuncs) for (const fn of arrFuncs) fn(files, args);
    // revoke das URLs quando componente desmontar
    return () => images.forEach(u => u.startsWith('blob:') && URL.revokeObjectURL(u));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  const pickWeb = () => inputRef.current?.click();

  const handleWebFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fl = event.target.files;
    if (!fl) return;

    const newFiles = Array.from(fl);
    const newPreviews = newFiles.map(f => URL.createObjectURL(f));

    const nextPreviews = max ? [...images, ...newPreviews].slice(0, max) : [...images, ...newPreviews];
    const nextFiles    = max ? [...files,  ...newFiles   ].slice(0, max) : [...files,  ...newFiles];

    setImages(nextPreviews);
    setFiles(nextFiles);
    onChange?.(nextPreviews);

    // permitir re-selecionar os mesmos arquivos
    event.target.value = '';
  };

  const removeAt = (idx: number) => {
    const imgs = [...images];
    const fls  = [...files];
    const [rm] = imgs.splice(idx, 1);
    fls.splice(idx, 1);

    if (rm?.startsWith('blob:')) URL.revokeObjectURL(rm);

    setImages(imgs);
    setFiles(fls);
    onChange?.(imgs);
  };

  return (
    <>
      <RN.View style={styles.container}>
        <ThumbGrid images={images} onRemove={removeAt} />
        <RN.Text style={styles.title}>Adicionar Imagens</RN.Text>
        <RN.Text style={styles.subtitle}>Selecione ou tire fotos para mostrar o progresso</RN.Text>
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

  // UI: URIs para miniaturas
  const [images, setImages] = React.useState<string[]>(variable);
  // Upload: objetos ricos do ImagePicker
  const [assets, setAssets] = React.useState<Array<{ uri: string; fileName?: string; mimeType?: string }>>([]);

  // Dispara callbacks sempre que os ASSETS mudam
  React.useEffect(() => {
    if (arrFuncs) for (const fn of arrFuncs) fn(assets, args);
    return () => { /* nada a revogar no nativo */ };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assets]);

  const pickNative = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a galeria foi negada');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: max ?? 0, // 0 = sem limite (iOS; pode ser ignorado em algumas versões)
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const newUris = result.assets.map(a => a.uri);
      const nextUris = max ? [...images, ...newUris].slice(0, max) : [...images, ...newUris];

      const newAssets = result.assets.map(a => ({
        uri: a.uri,
        fileName: a.fileName,
        mimeType: a.mimeType,
      }));
      const nextAssets = max ? [...assets, ...newAssets].slice(0, max) : [...assets, ...newAssets];

      setImages(nextUris);     // UI
      setAssets(nextAssets);   // Upload
      onChange?.(nextUris);
    }
  };

  const removeAt = (idx: number) => {
    const imgs = [...images]; imgs.splice(idx, 1);
    const ats  = [...assets]; ats.splice(idx, 1);
    setImages(imgs);
    setAssets(ats);
    onChange?.(imgs);
  };

  return (
    <RN.View style={styles.container}>
      <ThumbGrid images={images} onRemove={removeAt} />
      <RN.Text style={styles.title}>Adicionar Imagens</RN.Text>
      <RN.Text style={styles.subtitle}>Selecione ou tire fotos para mostrar o progresso</RN.Text>
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
          <RN.Pressable hitSlop={8} style={thumb.x} onPress={() => onRemove(idx)}>
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
  title: { fontSize: 18, fontWeight: '700', textAlign: 'center' },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#4B5563' },
  btn: {
    backgroundColor: '#E8EDF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 36,
    paddingHorizontal: 16,
  },
  btnTxt: { fontSize: 14, fontWeight: '700' },
});

const thumb = RN.StyleSheet.create({
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
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

