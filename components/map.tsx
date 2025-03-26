import { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import { mapStyle } from "../constants/map_config"
import * as Location from 'expo-location';

export default function RenderMap() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Memoized function to get current location
    const getCurrentLocation = useCallback(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
    }, []); // Empty dependency array ensures the function is memoized

    useEffect(() => {
        getCurrentLocation();
    }, [getCurrentLocation]); // Call memoized function when component mounts

    let text = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={{ flex: 1 }}>
            {location ? (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    customMapStyle={mapStyle}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="Minha Localização"
                        description="Este é o marcador da minha localização"
                    />
                    <Circle
                        center={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        radius={1000} // Raio em metros
                        strokeColor="rgba(255,0,0,0.5)"
                        fillColor="rgba(255,0,0,0.2)"
                    />
                </MapView>
            ) : (
                <View>
                    <Text>Loading...</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
});
