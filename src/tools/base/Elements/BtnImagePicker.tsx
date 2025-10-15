
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import * as ImagePicker from 'expo-image-picker';

type Tprops = {
  pass: {
    variable: string[];
    childrenItems: any[];
    arrFuncs: any[];
    args: any;
  };
};

export const BtnImagePicker = (props: Tprops) => {
  const isWeb = RN.Platform.OS === 'web';

  // ---------- set Props
  const { arrFuncs, args } = props.pass;
  console.log({ isWeb });

  // ---------- CORREÇÃO: decide uma única vez

  if (isWeb && typeof document !== 'undefined') {
    return <BtnImgPicWeb arrFuncs={arrFuncs} args={args} />;
  } else {
    // vale para android/ios (nativo)
    return <BtnImgPicNat arrFuncs={arrFuncs} args={args} />;
  }
};

const BtnImgPicWeb = (props: any) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  // ---------- set Props
  const { arrFuncs, args } = props;
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
        {image && <RN.Image source={{ uri: image }} style={styles.image} />}
        <RN.Text style={styles.txt1}>Adicionar Imagens</RN.Text>
        <RN.Text style={styles.txt2}>
          Selecione ou tire fotos para mostrar o progresso
        </RN.Text>
        <RN.Pressable style={styles.btn1} onPress={() => pickWeb()}>
          <RN.Text style={styles.txt1}>Adicionar</RN.Text>
        </RN.Pressable>
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

const BtnImgPicNat = (props: any) => {
  // ---------- set Props
  const { arrFuncs, args } = props;
  const [image, setImage] = React.useState<string | null>(null);

  console.log({ arrFuncs, args });

  const pickNative = async () => {
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
        {image && <RN.Image source={{ uri: image }} style={styles.image} />}
        <RN.Text style={styles.txt1}>Adicionar Imagens</RN.Text>
        <RN.Text style={styles.txt2}>
          Selecione ou tire fotos para mostrar o progresso
        </RN.Text>
        <RN.Pressable style={styles.btn1} onPress={() => pickNative()}>
          <RN.Text style={styles.txt1}>Adicionar</RN.Text>
        </RN.Pressable>
      </RN.View>
    </>
  );
};

const styles = RN.StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderColor: '#DDD',
    borderRadius: 8,
    borderWidth: 2,
    padding: 20,
    gap: 20,
  },
  btn1: {
    backgroundColor: '#E8EDF5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 32,
    width: 100,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  txt1: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt2: {
    fontSize: 14,
    textAlign: 'center',
  },
});
