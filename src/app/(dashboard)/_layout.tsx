import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        animation: "none", 
    }}>
      <Stack.Screen name="home" options={{headerShown:false}} />
      <Stack.Screen name="game" options={{headerShown:false}} />
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="chatbot" options={{headerShown:false}} />
      <Stack.Screen name="user" options={{headerShown:true, title: "Account"}}  />
    </Stack>
  )
}
