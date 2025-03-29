import Footer from "@/components/footer"
import { View, Text } from "react-native"

export default function Account(){
    return(
        <View className="flex-1 bg-white">
           <View className="flex flex-1">
                <Text>Account</Text>
           </View>
            <Footer route={"user"} />
        </View>
    )
}