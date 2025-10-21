import { useRouter as UseRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

import "../global.css";

const index = () => {
  const router = UseRouter();


  return (

    <View className="flex-1 justify-center items-center bg-yellow-200">
      <Text className="text-6xl text-yellow-950 font-bold">Conversor</Text>
      <Text className="text-2xl mt-4 text-yellow-950 font-bold">(cm) a (m)</Text>
      <Pressable 
      onPress={() => router.push('/convertPage')}
      className="bg-orange-300 px-9 py-6 rounded-lg mt-8">
        <Text className="text-4xl text-yellow-950">Iniciar</Text>
      </Pressable>
    </View>
  )
}

export default index