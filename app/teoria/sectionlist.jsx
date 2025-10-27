import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, SectionList, Text, View } from 'react-native';

export function SectionListComponent() {
  //datos hardcodeados
  

  const dataSeccionada = [
    {
      title: 'Bebidas alcoholicas',
      data: [
        { producto: 'Cerveza', precio: "5 peso" },
        { producto: 'Vino', precio: "15 peso" },
      ],
    },
    {
      title: 'Bebidas no alcoholicas',
      data: [
        { producto: 'Agua mineral', precio: "2 peso" },
        { producto: 'Coca cola', precio: "10 peso" },
        { producto: 'Jugo de naranja', precio: "8 peso" },
      ],
    },
  ]


  const renderItem = ({ item }) => {
    return (

      <View>
        <Text className="text-white">{item.producto}</Text>
        <Text className="text-white">{item.precio}</Text>
      </View>
    )
  }

  const renderSectionHeader = ({ section }) => {
    return (
      <View className="bg-gray-800 w-full p-2">
        <Text className="text-white font-bold text-lg">{section.title}</Text>
      </View>
    )
  }


  return (
    //Contenedor principal
    <SafeAreaView className="flex-1 justify-center items-center bg-black mt-10">
      <ExpoStatusBar style="inverted" />
      <Text className="text-4xl font-bold text-white">SectionList</Text>
      <SectionList sections={dataSeccionada} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
    </SafeAreaView>
  )
}


