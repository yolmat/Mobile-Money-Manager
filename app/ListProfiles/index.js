import { Text, View, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text >List Screen</Text>
            <Link href="/" push asChild>
                <Button title="Push to Home" />
            </Link>
            <Link href="/CreateProfile" push asChild>
                <Button title="Push to Create" />
            </Link>
            <Link href="/ListProfiles" push asChild>
                <Button title="Push to List" />
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
})