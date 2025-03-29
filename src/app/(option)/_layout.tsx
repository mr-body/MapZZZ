import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="search" options={{headerShown:false}} />
      <Stack.Screen name="notification" options={{headerShown:false}} />
      <Stack.Screen name="setting" options={{headerShown:false}} />
    </Stack>
  )
}
