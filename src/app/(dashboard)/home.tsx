import React from 'react';
import { Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Settings, Map, Search, Bell } from 'lucide-react-native';
import Footer from '@/components/footer';
import { router } from 'expo-router';

export default function App() {

  return (
    <SafeAreaView className='w-full h-full bg-white'>
      <View className='flex flex-row items-center justify-between px-7'>
        <View className='mt-8'>
          <TouchableOpacity onPress={() => router.replace("/(dashboard)")}>
            <Map color={"black"}/>
          </TouchableOpacity>
        </View>
        <View className='mt-8'>
          <View className='flex-1 flex-row items-center gap-5'>
            <TouchableOpacity onPress={() => router.push("/(option)/search")}>
              <Search  color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/(option)/notification")}>
              <Bell color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/(option)/setting")}>
              <Settings color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className='flex-1 flex-col p-5 gap-1'>
        <View className='w-full h-[120px] bg-[var(--primary-color)] rounded-xl'  />
        <View className='flex flex-row flex-1 h-full w-[100%] rounded-xl gap-1 ml-[-1px]'>
          <View className='flex flex-col  w-[50%] gap-1'>
            <View className='w-full h-[70%] bg-[var(--primary-color)] rounded-xl' />
            <View className='w-full h-[30%] bg-[var(--primary-color)] rounded-xl' />
          </View>
          <View className='bg-[var(--primary-color)] w-[50%] h-full rounded-xl gap-1'>
          </View>
        </View>
      </View>

      <Footer route="home" />
    </SafeAreaView>
  );
}
