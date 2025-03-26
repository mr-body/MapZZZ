import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function RenderCamera({ route }: any) {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
      <View>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => console.log('Código obtido: ', data)}
        />
        <View style={styles.modalFooter}>
          <Button title="Cancelar" onPress={() => setModalIsVisible(false)} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  modalFooter: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
