import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from 'react-native';

export function FlatlistComponent() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);



  const llamardata = (page) => {
    return Array.from({length:20}, (_, i) => `item ${page*20+i+1}`);
  };

  const cargardata = React.useCallback(() => {
    if (loading) return;
    setLoading (true)
    setTimeout(()=>{
      const newdata = llamardata(page);
      setData ((prevData) => [...prevData, ...newdata]);
      setPage((prevPage) => prevPage + 1)
      setLoading (false)
    },1500);
    
  }, [loading, page]);

  React.useEffect(() => {
    cargardata();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  

  const renderItem = ({ item }) => {
    return (

      <View>
        <Text className="text-white">{item}</Text>
      </View>
    )
  }

  

  return (
    //Contenedor principal
    <SafeAreaView className="flex-1 justify-center items-center mt-10">
      <ExpoStatusBar style="inverted" />
      <Text className="text-4xl font-bold text-white">Flatlist</Text>
      <FlatList 
      keyExtractor={(item, index) => `${item}-${index}`}
      data={data} 
      renderItem={ renderItem }
      onEndReached={cargardata}
      onEndReachedThreshold={0.5}
      ListFooterComponent={() => loading?<ActivityIndicator size="large" color="#0000ff"/>: null}
      />
    </SafeAreaView>
  )
}


