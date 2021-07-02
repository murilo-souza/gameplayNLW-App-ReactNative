import React, {useState} from "react";
import { View, ImageBackground, Text, FlatList, Alert } from "react-native";
import {Fontisto} from '@expo/vector-icons'
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import {ListDivider} from "../../components/ListDivider";
import {ButtonIcon} from '../../components/ButtonIcon'
import {Member, MemberProps} from "../../components/Member";
import Banner from '../../assets/banner.png';
import {styles} from "./styles";
import {BorderlessButton} from 'react-native-gesture-handler'
import { theme } from "../../global/styles/theme";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";

type Params = {
    guildSelected: AppointmentProps
}

type GuildWidget = {
    id: string,
    name: string,
    instant_invite: string,
    members: MemberProps[],
    presence_count: number,
}


export function AppointmentDetails(){
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);
    const route = useRoute();
    const {guildSelected} = route.params as Params;

    async function fetchGuildWidget(){
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
            setLoading(false);

        } catch {
            Alert.alert('Verifique as configurações do servidor. Será que o Widget está habilitado?')
        } finally {
            setLoading(false);
        }
    }

    const members = [
        {
            id: '1', 
            username: 'Murilo',
            avatar_url: 'https://github.com/murilo-souza.png',
            status: 'online'
        },
        {
            id: '2', 
            username: 'Murilo',
            avatar_url: 'https://github.com/murilo-souza.png',
            status: 'offline'
        }
    ]

    return(
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}

                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground source={Banner} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>{guildSelected.guild.name}</Text>
                    <Text style={styles.subtitle}>{guildSelected.description}</Text>
                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />
            
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider isCentered/>}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon title="Entrar na partida"/>
            </View>
        </Background>
    );
}