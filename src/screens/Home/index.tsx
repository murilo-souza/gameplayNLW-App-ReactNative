import React from "react";
import { View, Text } from "react-native";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { styles } from "./styles";

export function Home(){
    return(
        <View>
            <View style={styles.header}>
                <Profile/>
                <ButtonAdd/>
            </View>
            <View>
                <CategorySelect/>
            </View>
        </View>
    );
}