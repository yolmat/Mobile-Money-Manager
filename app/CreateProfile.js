import { Text, View, StyleSheet, Button, Input, YStack } from "tamagui";
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { saveUser } from './functions/save/save'
import { useState } from "react";


export default function CreateProfile() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const schema = yup.object({
        name: yup.string().required("Campo Obrigatorio"),
        email: yup.string().required("Campo Obrigatorio").email("Email Invalido"),
        passworld: yup.string().required("campo Obrigatorio").min(1, "Minimo de 6 caracteres")
    })

    const { handleSubmit, register, control, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })

    const save = (data) => {
        saveUser(data, setLoading, setError, setSuccess)
    }

    return (
        <YStack minHeight={"100%"} padding={10}>
            <View height={"50%"}>
                <Text>
                    Name:
                </Text>
                <Controller
                    name="name"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            onChangeText={(value) => onChange(value)}
                            flex={1}
                            value={value}
                            size="$2"
                            placeholder="Digite o seu nome"
                        />
                    )}
                />
                {errors?.name && <Text>{errors?.name?.message}</Text>}
                <Text marginTop={15}>
                    Email:
                </Text>
                <Controller
                    name="email"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            onChangeText={(value) => onChange(value)}
                            flex={1}
                            value={value}
                            size="$2"
                            placeholder="Digite o seu email"
                        />
                    )}
                />
                {errors?.email && <Text>{errors?.email?.message}</Text>}
                <Text marginTop={15}>
                    Passoword:
                </Text>
                <Controller
                    name="passworld"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            onChangeText={(value) => onChange(value)}
                            flex={1}
                            value={value}
                            size="$2"
                            placeholder="Digite a sua senha"
                            secureTextEntry={true}
                        />
                    )}
                />
            </View>
            {errors?.passworld && <Text>{errors?.passworld?.message}</Text>}
            <Button onPress={handleSubmit(save)}>Salvar</Button>
        </YStack >
    );
}