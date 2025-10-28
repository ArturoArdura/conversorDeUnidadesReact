import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export function Rickandmorty() {
    const [data, setData] = useState ([]) 
    useEffect(() => {
        // Aquí podrías hacer una llamada a la API de Rick and Morty para obtener datos
        fetch('https://rickandmortyapi.com/api/character')
            .then((response) => {
                if(!response.ok){
                    throw new Error ('Error en la solicitud')
                } 
                return response.json()
            })
            .then((data) => {
                setData(data.results || []);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);


  return (
    <View className="items-center justify-center flex-1">
      <Text className="text-white">Rick and Morty</Text>
        {data.map((character) => (
          <Text key={character.id} className="text-white">{character.name}</Text>
        ))}
    </View>
  )
}