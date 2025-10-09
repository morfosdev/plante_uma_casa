
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';

type Tprops = {
  pass: {
    variable: string[];
    childrenItems: any[];
    arrFuncs: any[];
    args: any;
  };
};
const css =
  'color: #54ff00; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';

export const BtnImgPicWeb = (props: Tprops) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // ---------- set Props
  const { arrFuncs, args } = props.pass;
  const [image, setImage] = React.useState<string | null>(null);

  console.log({ arrFuncs, args });

  const pickWeb = () => {
    inputRef.current?.click();
  };

  const handleWebFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImage(objectUrl);
    }
  };

  return (
    <>
      <RN.View style={styles.container}>
        <RN.Button title="Escolher imagem" onPress={() => pickWeb()} />
        {image && <RN.Image source={{ uri: image }} style={styles.image} />}
      </RN.View>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleWebFile}
      />
    </>
  );
};

export const BtnImgPicNat = (props: Tprops) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // ---------- set Props
  const { arrFuncs, args } = props.pass;
  const [image, setImage] = React.useState<string | null>(null);

  console.log({ arrFuncs, args });

  const pickNative = async () => {
    const ImagePicker = await import('expo-image-picker');
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a galeria foi negada');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
      <RN.View style={styles.container}>
        <RN.Button title="Escolher imagem" onPress={() => pickNative()} />
        {image && <RN.Image source={{ uri: image }} style={styles.image} />}
      </RN.View>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={() => {}}
      />
    </>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
