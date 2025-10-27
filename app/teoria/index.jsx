import { useRouter as UseRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { FlatlistComponent } from './flatlist';
import { SectionListComponent } from './sectionlist';



export default function Index() {
  const dataCategorias = [
    { id: 1, nombre: 'Flatlist', component:<FlatlistComponent /> },
    { id: 2, nombre: 'SectionList', component:<SectionListComponent /> },
  ]
  const [selectedCategory, setSelectedCategory] = useState(dataCategorias[0]);

  

  return (
    <Container>
      <StatusBar style="light" />
      <TextGrande>Seleccione una categoría</TextGrande>
      <ContenedorCategorias>
        {dataCategorias.map((item) => {
          return (
            <CategoryContainer key={item.id} selected = {selectedCategory.id === item.id} onPress ={() => setSelectedCategory(item)}>
              <CategoryName>{item.nombre}</CategoryName>
            </CategoryContainer>
          );
        })}
      </ContenedorCategorias>
      <ContentComponent>
        {selectedCategory.component}
      </ContentComponent>
      <ButtonChido>
        <Text className="text-white text-lg font-bold">Regresar</Text>
      </ButtonChido>
    </Container>
  )
}




//estilos para no andar haciendo muy verboso jajaja
const TextGrande = ({ children }) => {
  return (
    <Text className="text-2xl font-bold text-white">{children}</Text>
  )
}

export const ButtonChido = ({children}) => {
  const router = UseRouter();
  return (
    <TouchableOpacity className="bg-green-700 p-4 rounded-lg mt-5 mb-10" onPress={() => router.back()}>
      {children}
    </TouchableOpacity>
  )
}

const Container = ({children}) => {
  return (
    <View className="flex-1 bg-black items-center" style={{paddingTop:Platform.OS === 'android' ? 50 : 0}}>
      {children}
    </View>
  )
}

const ContenedorCategorias = ({ children }) => {
  return (
    <View className="wrap flex-row mt-3">
      {children}
    </View>
  )
}

//Item de categoria

const CategoryContainer = ({ children, selected, onPress }) => {
  return (
    <TouchableOpacity className={`bg-black ${selected ? 'bg-green-700 border-2 border-lime-300' : ''} p-4 m-2 rounded-lg`} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

const CategoryName = ({ children }) => {
  return (
    <Text className="text-white text-lg">{children}</Text>
  )
}

//componentes content
const ContentComponent = ({ children }) => {
  return (
    <View className="flex-1 w-full mt-5">
      {children}
    </View>
  )
}