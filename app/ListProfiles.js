import { YGroup, ListItem, styled, View, Text, Button } from "tamagui";
import { useEffect, useState } from "react";
import { Loading } from "../components/loading";
import { getUser } from "./functions/listUsers/GetUsers";
import { router } from "expo-router";

export default function ListProfiles() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        getUser(setData, setLoading, setError)
    }, [])

    function goToCreate() {
        router.push("/CreateProfile")
    }

    return (
        <View padding="5" backgroundColor="#bdbebd" alignItems="center">

            <Button margin="10" backgroundColor="blue" color="#fff" fontWeight="bold" onPress={goToCreate}>Criar Usuario</Button>

            <YGroup width="100%" alignItems="center">
                {loading && <Loading />}
                {!loading && data?.length ?
                    data.map((data, i) => (
                        <YGroup.Item key={i} >
                            <StyledCard>
                                <Text>{data.name}</Text>
                            </StyledCard>
                        </YGroup.Item>
                    )) : null}
            </YGroup>
        </View>
    );
}

const StyledCard = styled(ListItem, {
    backgroundColor: "#e9e9e9",
    color: "#fff",
    marginBottom: 3,
    width: "90%"
})