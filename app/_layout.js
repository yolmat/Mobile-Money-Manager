import { Stack } from "expo-router";
import { createTamagui, TamaguiProvider, View } from "tamagui"
import { defaultConfig } from '@tamagui/config/v4'


const config = createTamagui(defaultConfig)

export default function RootLayout() {
  return (

    <TamaguiProvider config={config} >

      <Stack
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#135456",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }}

      >
        <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
        <Stack.Screen name="CreateProfile" options={{ headerTitle: "Criar Usuario" }} />
        <Stack.Screen name="ListProfiles" options={{ headerTitle: "Lista de Usuarios" }} />
      </Stack>

    </TamaguiProvider>

  )
}