import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { House, Gamepad2, MapPin, BotMessageSquare, CircleUser } from "lucide-react-native";
import { router } from 'expo-router';

export default function Footer({ route }: any) {

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => router.push('/(dashboard)/home')}
      >
        <House color={route === 'home' ? '#158ADD' : '#000000'} size={24} />
        <Text style={[styles.iconText, route === 'home' && styles.activeText]}>HOME</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => router.push('/(dashboard)/game')}
      >
        <Gamepad2 color={route === 'game' ? '#158ADD' : '#000000'} size={24} />
        <Text style={[styles.iconText, route === 'game' && styles.activeText]}>Game</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainerCamera}
        // onPress={handleOpenCamera}
        onPress={() => router.push('/(dashboard)')}
      >
        {/* <Camera style={styles.btn_camera} color='white' size={23} /> */}
        <MapPin style={styles.btn_camera} color='white' size={24} />
        {/* <Text style={[styles.iconText,  styles.activeText]}>CAMERA</Text> */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => router.push('/(dashboard)/chatbot')}
      >
        <BotMessageSquare color={route === 'chatbot' ? '#158ADD' : '#000000'} size={24} />
        <Text style={[styles.iconText, route === 'chatbot' && styles.activeText]}>ChatBot</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => router.push('/(dashboard)/user')}
      >
        <CircleUser color={route === 'user' ? '#158ADD' : '#000000'} size={24} />
        <Text style={[styles.iconText, route === 'user' && styles.activeText]}>User</Text>
      </TouchableOpacity>
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
    marginLeft:8,
    marginRight:8
  },
  iconText: {
    fontSize: 8,
    color: '#000',
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
