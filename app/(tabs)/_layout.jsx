import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: "#0000"}}>
        <Tabs.Screen name="index" options={{title: "Home", tabBarIcon: () => (<AntDesign name="apple" size={24} color="black" />)}}></Tabs.Screen>
        <Tabs.Screen name="about" options={{title: "About", tabBarIcon: () => (<AntDesign name="info" size={24} color="black" />)}}></Tabs.Screen>
    </Tabs>
  )
}