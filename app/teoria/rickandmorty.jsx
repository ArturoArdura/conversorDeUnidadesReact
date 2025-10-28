import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export function Rickandmorty() {
    const [data, setData] = useState ([]) 
    const [loading, setLoading] = useState (true);
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
          .then((response) => {
            setData(response.data.results || []);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
    }, []);

  if (loading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-white text-xl font-bold mb-3">Rick and Morty: Characters</Text>
      <FlatList 
        data={data} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item: character})=> (
          <Text className="text-white text-lg py-2">{character.name}</Text>
        )} 
      />
    </View>
  )
}