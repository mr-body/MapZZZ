import Footer from "@/components/footer"
import { View, Text } from "react-native"

export default function Game(){
    return(
        <View className="flex-1 bg-white">
            <View className="flex flex-1 items-center justify-center">
                <Text className="text-3xl">Game</Text>
            </View>
            <Footer route={"game"} />
        </View>
    )
}