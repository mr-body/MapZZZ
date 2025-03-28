import { Text, View, Button } from 'react-native';
import RenderMap from '@/components/map';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import Footer from '@/components/footer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useState, useRef, useMemo, useCallback } from 'react';

export default function Map() {

  return (
    <View style={{ flex: 1 }}>
      <RenderMap />
      <View className='bg-white h-[60px] flex justify-center p-4 rounded-t-2xl'>
        
      </View>
      <Footer route="map" />
    </View>
  );
}
