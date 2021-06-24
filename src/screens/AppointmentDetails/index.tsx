import React from "react";
import { View } from "react-native";
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import {styles} from "./styles";

export function AppointmentDetails(){
    return(
        <Background>
            <Header
                title="Detalhes"
                
            />
        </Background>
    );
}