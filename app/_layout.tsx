import { Stack } from "expo-router"

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="(conversor)" options={{headerShown:false}}/>
        </Stack>
    )
}