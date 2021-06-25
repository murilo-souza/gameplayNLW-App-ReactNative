import React, {useState} from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";
import { CategorySelect } from "../../components/CategorySelect";
import { Background } from "../../components/Background";
import {styles} from "./styles";
import { theme } from "../../global/styles/theme";

export function AppointmentCreate(){
    const [category, setCategory] = useState('')

    return(
        <Background>
            <Header
                title="Agendar partida"
            />
            <Text style={styles.label}>
                Categoria
            </Text>

            <CategorySelect
                hasCheckBox
                setCategory={setCategory}
                categorySelected={category}
            />
        </Background>
    );
}