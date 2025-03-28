import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, Alert, Button } from 'react-native';
import { House, Gamepad2, MapPin, BotMessageSquare, CircleUser } from 'lucide-react-native';
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
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => router.push('/home')}
      >
        <House color={route === 'home' ? '#158ADD' : '#000000'} size={24} />
        <Text style={[styles.iconText, route === 'home' && styles.activeText]}>HOME</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        // onPress={() => router.push('/pages/map')}
      >
        <Gamepad2 color={route === 'game' ? '#158ADD' : '#000000'} size={30} />
        <Text style={[styles.iconText, route === 'game' && styles.activeText]}>Game</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainerCamera}
        // onPress={handleOpenCamera}
        onPress={() => router.push('/')}
      >
        {/* <Camera style={styles.btn_camera} color='white' size={23} /> */}
        <MapPin style={styles.btn_camera} color='white' size={30} />
        {/* <Text style={[styles.iconText,  styles.activeText]}>CAMERA</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        // onPress={() => router.push('/pages/chatbot')}
      >
        <BotMessageSquare color={route === 'chatbot' ? '#158ADD' : '#000000'} size={30} />
        <Text style={[styles.iconText, route === 'chatbot' && styles.activeText]}>ChatBot</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        // onPress={() => router.push('/pages/user')}
      >
        <CircleUser color={route === 'user' ? '#158ADD' : '#000000'} size={27} />
        <Text style={[styles.iconText, route === 'user' && styles.activeText]}>User</Text>
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
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
  },
  iconContainerCamera: {
    width: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 50,
    backgroundColor: '#158ADD',
    marginLeft:20,
    marginRight:20
  },
  iconText: {
    fontSize: 8,
    color: '#A0A0A0',
  },
  activeText: {
    color: '#158ADD', // Active icon text color
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
  btn_camera: {
    // backgroundColor: "#158ADD",
    // borderRadius: 25,
    // padding: 10,
    // elevation: 5, // Adding a shadow for better UI experience
  },
});
