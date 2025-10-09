
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';

export const BtnImgPic = (props: any) => {
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
