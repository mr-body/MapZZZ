import Footer from "@/components/footer"
import { View, Text } from "react-native"

export default function ChatBot(){
    return(
        <View className="flex-1 bg-white">
            <View className="flex flex-1 items-center justify-center">
                <Text className="text-3xl">ChatBot</Text>
            </View>
            <Footer route={"chatbot"} />
        </View>
    )
}