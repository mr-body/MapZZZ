import { Text, View, StyleSheet } from 'react-native';
import RenderMap from '@/components/map'
import Footer from '@/components/footer'

export default function Map() {
    
    return (
        <View style={{ flex: 1 }}>
          <RenderMap />
          <Footer route="map" />
        </View>
    );
}