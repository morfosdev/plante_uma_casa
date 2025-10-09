
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

  type Trender1 = null | React.JSX.Element;
  const [SttComp, SetComp] = React.useState<Trender1>(null);

  // ---------- set Props
  const { arrFuncs, args } = props.pass;
  console.log({ isWeb });

  // ---------- CORREÇÃO: decide uma única vez
  if (!SttComp) {
    if (isWeb && typeof document !== 'undefined') {
      <BtnImgPicWeb arrFuncs={arrFuncs} args={args} />;
    } else {
      // vale para android/ios (nativo)
      <BtnImgPicNat arrFuncs={arrFuncs} args={args} />;
    }
  }

  return <>{SttComp}</>;
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
        <RN.Button title="Escolher imagem" onPress={() => pickNative()} />
        {image && <RN.Image source={{ uri: image }} style={styles.image} />}
      </RN.View>
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
