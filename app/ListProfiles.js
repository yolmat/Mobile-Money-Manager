import { YGroup, ListItem, styled, YStack, Separator, Text, Button } from "tamagui";
import { useEffect, useState } from "react";
import { Loading } from "../components/loading";
import { getUser } from "./functions/listUsers/GetUsers";

export default function ListProfiles() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        getUser(setData, setLoading, setError)
    }, [])

    return (
        <YStack padding="$3" backgroundColor="#bdbebd">

            <YGroup>
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
        </YStack>
    );
}

const StyledCard = styled(ListItem, {
    backgroundColor: "#e9e9e9",
    color: "#fff",
    marginBottom: 3,
    width: "100%"
})