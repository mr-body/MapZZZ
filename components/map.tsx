import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Circle, Heatmap } from 'react-native-maps';
import MapViewCluster from 'react-native-map-clustering';
import { mapStyle } from "../constants/map_config"
import * as Location from 'expo-location';

type camadas = "satellite" | "hybridFlyover" | "satelliteFlyover" | "terrain" | "standard" | "mutedStandard" | "hybrid" | "zzz"

export default function RenderMap() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [type, setType] = useState<camadas | null>("standard");

    const [markers, setMarkers] = useState<any[]>([]);

    const getCurrentLocation = useCallback(async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        generateZones(location.coords.latitude, location.coords.longitude);
    }, []);

    useEffect(() => {
        getCurrentLocation();
    }, [getCurrentLocation]);

    // Função para gerar zonas ao redor da localização
    const generateZones = (latitude: number, longitude: number) => {
        const generatedMarkers: any[] = [];
        const radius = 0.1; // Distância máxima em graus para as zonas

        for (let i = 0; i < 20; i++) {
            // Deslocamento aleatório dentro do raio
            const latOffset = (Math.random() - 0.5) * radius;
            const lonOffset = (Math.random() - 0.5) * radius;

            const newLat = latitude + latOffset;
            const newLon = longitude + lonOffset;

            generatedMarkers.push({
                id: i,
                coordinate: { latitude: newLat, longitude: newLon },
                radius: 50, // raio do círculo em metros
                intensity: Math.random(), // intensidade do Heatmap
            });
        }

        setMarkers(generatedMarkers);
    };

    let text = 'Waiting...';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => setType('satellite')} style={styles.button}>
                    <Text>Satellite</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('hybrid')} style={styles.button}>
                    <Text>Hybrid</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('terrain')} style={styles.button}>
                    <Text>Terrain</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('standard')} style={styles.button}>
                    <Text>MapZZZ</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                {location ? (
                    <MapViewCluster
                        style={styles.map}
                        provider={PROVIDER_GOOGLE}
                        mapType={type}
                        showsUserLocation={true}
                        initialRegion={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        customMapStyle={mapStyle}>
                        <Heatmap
                            points={markers.map(marker => ({
                                latitude: marker.coordinate.latitude,
                                longitude: marker.coordinate.longitude,
                                weight: marker.intensity
                            }))}
                            opacity={0.6}
                            radius={20}
                        />
                        {markers.map((marker) => (
                            <React.Fragment key={marker.id}>
                                <Circle
                                    center={marker.coordinate}
                                    radius={marker.radius}
                                    strokeColor="rgba(255, 0, 0, 0.5)"
                                    fillColor="rgba(255, 0, 0, 0.3)"
                                />
                                <Marker coordinate={marker.coordinate}>
                                    <View style={styles.marker} />
                                </Marker>
                            </React.Fragment>
                        ))}
                    </MapViewCluster>
                ) : (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                )}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        backgroundColor: '#DDDDDD',
        padding: 10,
        borderRadius: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    marker: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
});

