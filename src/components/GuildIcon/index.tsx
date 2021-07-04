import React from "react";
import { Image, View } from "react-native";
import {styles} from "./styles"
import DiscordSVG from '../../assets/discord.svg'

const {CDN_IMAGE} = process.env;



type Props = {
    guildId: string,
    iconId: string| null,
}

export function GuildIcon({guildId, iconId}: Props){
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`;
    
    //'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg'

    return(
        <View style={styles.container}>
            {
                iconId ?
                <Image 
                    source={{uri}} 
                    style={styles.image}
                    resizeMode='cover'
                />
                :
                <DiscordSVG
                    width={40}
                    height={40}
                />

            }
        </View>
    );
}