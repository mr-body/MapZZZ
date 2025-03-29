import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import Footer from "@/components/footer"

export default function App() {
    return (
        <View className='flex-1'>
            <MapView
                style={style.map}
                provider={PROVIDER_GOOGLE}
            />
            <Footer route={"map"} />
        </View>
    );
}

const style = StyleSheet.create({
    map: {
        flex: 1
    },
})