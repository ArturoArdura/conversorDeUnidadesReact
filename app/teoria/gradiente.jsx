import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

export function Gradientes() {
  return (
    <View >
      <LinearGradient colors={['red', 'blue']}>
        <Card></Card>
      </LinearGradient>
    </View>
  )
}

const Card = ({children}) => {
    return (
        <View className="rounded-lg mb-5 size-80">{children}</View>
    ) 

}