import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";


export default function Layout() {
    return (
        <Drawer screenOptions={({route}) => ({drawerActiveTintColor: 'blue', drawerInactiveTintColor: 'gray',
        drawerLabelStyle: {fontSize:18, fontWeight:'bold'},
        drawerType: 'front',
        drawerStyle: {backgroundColor: '#f0f0f0'},
        })}>
            <Stack screenOptions={{headerShown:false}}>
                <Stack.Screen name="index"/>
            </Stack>
        </Drawer>
    )
}