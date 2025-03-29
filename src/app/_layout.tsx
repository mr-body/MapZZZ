// RootLayout.js
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import "@/assets/styles/global.css";
import { cssInterop } from "nativewind";
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenComponent from '@/components/SplashScreenComponent'; // Importe seu componente personalizado
import { Image } from "react-native";

cssInterop(Image, { classname: 'style' });

// Previne o auto-hide da splash screen do Expo
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // Simulando um carregamento para mostrar a splash screen personalizada por 2 segundos
    const loadApp = async () => {
      // Aqui você pode realizar inicializações, carregamento de dados, etc.
      setTimeout(async () => {
        setIsAppReady(true);  // Defina como true quando o app estiver pronto
        await SplashScreen.hideAsync();  // Esconde a splash screen do Expo
      }, 2000);  // Exibe a splash personalizada por 2 segundos
    };

    loadApp();
  }, []);

  if (!isAppReady) {
    // Exibe o componente personalizado de splash enquanto o app carrega
    return <SplashScreenComponent />;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      <Stack.Screen name="(option)" options={{ headerShown: false }} />
    </Stack>
  );
}
