import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { ArrowLeft, Search as SearchIcon } from "lucide-react-native"; // Renaming the Search import to SearchIcon to avoid conflict
import { router } from "expo-router";

export default function SearchScreen() {

    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="flex-row items-center p-3 bg-white">
                <View>
                    <TouchableOpacity onPress={() => router.back()}>
                        <ArrowLeft size={24} color={"black"} />
                    </TouchableOpacity>
                </View>
                <View className="flex flex-row items-center px-4 justify-between bg-[#ddd] rounded-2xl w-[90%]">
                    <TextInput
                        className="flex-1 border  p-2 border-1 border-[#ddd] rounded-2xl"
                        placeholder="Search"
                    />
                    <SearchIcon 
                        className="ml-2 w-[20%]"
                        size={18} color={"#000000"}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}
