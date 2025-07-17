import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#135456",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="CreateProfile" options={{ headerTitle: "Criar Usuario" }} />
      <Stack.Screen name="ListProfiles" options={{ headerTitle: "Lista de Usuarios" }} />
    </Stack>
  )
}