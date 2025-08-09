import { Text, View, StyleSheet, Button } from "react-native";
import { router } from "expo-router";

export default function Home() {
  function goToCreate() {
    router.push("/CreateProfile")
  }

  function goToHome() {
    router.push("/")
  }

  function goToList() {
    router.push("/ListProfiles")
  }

  return (
    <View style={styles.container}>
      <Text >Create Screen</Text>
      <Button title="Push to Home" onPress={goToHome} />
      <Button title="Push to Create" onPress={goToCreate} />
      <Button title="Push to List" onPress={goToList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: "#14161A"
  }
})