import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/images/adaptive-icon.png')} 
        style={styles.logo}
      />
      <Text style={styles.text}>MapaZZZ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreenComponent;
