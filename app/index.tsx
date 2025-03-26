import React from 'react';
import { Text, View, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { Settings, Map } from 'lucide-react-native';
import Footer from '@/components/footer';

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [valor, setValor] = React.useState(0);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setValor((prevValor) => prevValor + 1); // Safer state update
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Map color="red" size={23} />
        </View>
        <View style={styles.textContainer}>
          <Text>Pesquisar</Text>
        </View>
        <View style={styles.iconContainer}>
          <Settings color="red" size={23} />
        </View>
      </View>

      {/* The second ScrollView is removed */}
      <Footer route="home" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Optional for a cleaner background
  },
  content: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center', // Center the content
    padding: 20, // Add some padding around content
  },
  iconContainer: {
    marginVertical: 10, // Space between icons
  },
  textContainer: {
    marginVertical: 10, // Space between text and icons
  },
});
