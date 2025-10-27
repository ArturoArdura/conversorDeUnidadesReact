import { useRouter as UseRouter } from 'expo-router';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, Pressable, SafeAreaView, Text } from 'react-native';
import "../../global.css";
import { ButtonChido } from '../teoria';

const Index = () => {
  const router = UseRouter();


  return (

    <SafeAreaView style={{ paddingTop: Platform.OS === "ios" ? 0 : 50 }} className="flex-1 justify-center items-center bg-yellow-200">
    <ExpoStatusBar style="dark" />

      <Text className="text-6xl text-yellow-950 font-bold">Conversor</Text>
      <Text className="text-2xl mt-4 text-yellow-950 font-bold">(cm) a (m)</Text>
      <Pressable 
      onPress={() => router.push('/conversor/convertPage')}
      
      className="bg-orange-300 px-9 py-6 rounded-lg mt-8 shadow-lg shadow-yellow-700/50 ">
        <Text className="text-4xl text-yellow-950">Iniciar</Text>
      </Pressable>
      <ButtonChido>
        <Text className="text-white text-lg font-bold">Regresar</Text>
      </ButtonChido>
    </SafeAreaView>
  )
}

export default Index