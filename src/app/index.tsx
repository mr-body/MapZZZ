import { Text, View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1">
      <View
        className="bg-[var(--primary-color)] h-[400px] flex items-center justify-center rounded-b-3xl"
      >
        <Text>Macrofocos</Text>
      </View>
      <TouchableOpacity onPress={() => router.push("/(dashboard)")}>
        <Text>gO</Text>
      </TouchableOpacity>
    </View>
  );
}
