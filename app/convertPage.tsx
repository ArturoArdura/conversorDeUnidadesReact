import { useRouter as UseRouter } from 'expo-router';
import React, { useEffect } from 'react';

import { Pressable, Text, TextInput, View } from 'react-native';

const convertPage = () => {
  const router = UseRouter();
  useEffect(() => {
    console.log("Convert Page Mounted");
  }, []);  



  return (
   
       <View className="flex-1 justify-center items-center bg-yellow-200 space-y-9">


         <TextInput className="bg-white text-2xl rounded-lg px-4 py-2 mt-4" placeholder="centimetros (cm)" />
         <Pressable className="bg-white px-9 py-6 rounded-lg mt-8">
            <Text className="text-2xl font-bold text-yellow-950">Calcular</Text>
         </Pressable>
        <Text className="text-4xl text-yellow-950 font-bold">Resultado: ----</Text>
        <Pressable className="bg-orange-300 px-9 py-4 rounded-lg mt-8" onPress ={() => router.back()}>
            <Text className="text-3xl font-bold text-yellow-950">Volver</Text>
         </Pressable>
         
       </View>
  )
}

export default convertPage