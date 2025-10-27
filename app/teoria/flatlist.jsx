import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, Text, View } from 'react-native';

export function FlatlistComponent() {
  //datos hardcodeados
  const data = [
    {
      producto: 'Cerveza',
      precio: "5 peso",
    },
    {
      producto: 'Agua mineral',
      precio: "2 peso",
    },
    {
      producto: 'Coca cola',
      precio: "10 peso",
    },
    {
      producto: 'Jugo de naranja',
      precio: "8 peso",
    }
  ]

  

  const renderItem = ({ item }) => {
    return (

      <View>
        <Text className="text-white">{item.producto}</Text>
        <Text className="text-white">{item.precio}</Text>
      </View>
    )
  }

  

  return (
    //Contenedor principal
    <SafeAreaView className="flex-1 justify-center items-center mt-10">
      <ExpoStatusBar style="inverted" />
      <Text className="text-4xl font-bold text-white">Flatlist</Text>
      <FlatList data={data} renderItem={ renderItem }/>
    </SafeAreaView>
  )
}


