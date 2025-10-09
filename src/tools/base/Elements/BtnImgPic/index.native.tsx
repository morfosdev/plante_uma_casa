
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const BtnImgPic = (props: any) => {
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
