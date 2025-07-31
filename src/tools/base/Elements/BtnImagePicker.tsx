
// ---------- import Packs
import React from 'react';
import * as ImagePicker from 'expo-image-picker';
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

export const BtnImagePicker = (props: Tprops) => {
  // ---------- set Props
  const { arrFuncs, args } = props.pass;
  const [image, setImage] = React.useState<string | null>(null);

  console.log({ arrFuncs, args });

  const pickImage = async () => {
		// Solicita permissão para acessar a galeria
console.log("ImagePicker Btn Pressed");

    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      RN.Alert.alert(
        'Permissão necessária',
        'Precisamos de acesso à sua galeria.',
      );
      return;
    }

    // Abre a galeria
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // apenas imagens
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // pega a URI da imagem selecionada
    }
  };

  return (
    <>
      <RN.View style={styles.container}>
        <RN.Button title="Escolher imagem" onPress={pickImage} />
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

