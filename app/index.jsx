import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import "../global.css";

export default function index() {
    const datarutas = [
        {name: "Conversor", ref: "conversor"},
        {name: "Teoría", ref: "teoria"},
        {name: "Tabs", ref: "/(tabs)"},
      
    ]

    const renderItem = ({ item }) => (
        <TouchableOpacity>
          <Link className=" text-white p-4 mb-3 rounded-md flex-row items-center border border-gray-600 w-auto" href={item.ref}>
            <Text>{item.name}</Text>
        </Link>
        </TouchableOpacity>
    )
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === "ios" ? 0 : 50 }} className="bg-black flex-1 p-8">
      <StatusBar style="auto" />
      <TitleChido title="Menú" />
      <FlatList keyExtractor={(item)=>item.name} data={datarutas} renderItem={renderItem} />
      
    </SafeAreaView>
    
  )
}





//Estilos
const TitleChido = ({ title }) => {
  return (
    <Text className="text-white text-2xl font-bold items-center">{title}</Text>
  )
}

