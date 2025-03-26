import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Alert, Button } from 'react-native';
import { House, Camera, MapPin, BotMessageSquare, CircleUser } from 'lucide-react-native';
import { router } from 'expo-router';
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function Footer({ route }: any) {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [permission, requestPermissionsAsync] = useCameraPermissions();

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) return Alert.alert('Permissão negada');
      setModalIsVisible(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <House color={route === 'home' ? 'blue' : 'red'} size={23} onPress={() => router.push('/')} />
        <Text style={{ fontSize: 8 }}>HOME</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/pages/map')}>
        <MapPin color={route === 'map' ? 'blue' : 'red'} size={23} />
        <Text style={{ fontSize: 8 }}>MAP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} onPress={handleOpenCamera}>
        <Camera color={route === 'camera' ? 'blue' : 'red'} size={23} />
        <Text style={{ fontSize: 8 }}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <BotMessageSquare color={route === 'chatbot' ? 'blue' : 'red'} size={23} />
        <Text style={{ fontSize: 8 }}>ChatBot</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer}>
        <CircleUser color={route === 'user' ? 'blue' : 'red'} size={23} />
        <Text style={{ fontSize: 8 }}>User</Text>
      </TouchableOpacity>

      <Modal visible={modalIsVisible} animationType="slide">
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => console.log('Código obtido: ', data)}
        />
        <View style={styles.modalFooter}>
          <Button title="Cancelar" onPress={() => setModalIsVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#fff', // Optional: for better visibility of the footer
  },
  iconContainer: {
    alignItems: 'center',
  },
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
