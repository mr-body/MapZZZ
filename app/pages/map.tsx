import { Text, View, StyleSheet } from 'react-native';
import RenderMap from '@/components/map'
import Footer from '@/components/footer'

export default function Map() {
    return (
        <View style={{ flex: 1 }}>
          <View>
            <Text>Nextjs</Text>
            <Text>Nextjs</Text>
            <Text>Nextjs</Text>
          </View>
          <RenderMap />
          <Footer route="map" style={{position: 'absolute'}} />
        </View>
    );
}