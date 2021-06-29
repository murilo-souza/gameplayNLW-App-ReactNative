import React from 'react'
import { View, FlatList } from 'react-native'

import { styles } from './styles'

import { Guild, GuildProps } from '../../components/Guild'
import {ListDivider} from '../../components/ListDivider'

type Props ={
    handlerGuildSelect: (guild: GuildProps) => void,
}


export function Guilds({handlerGuildSelect}: Props) {
    const guilds =[
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true,
        },
        {
            id: '2',
            name: 'Yeah, Boy',
            icon: 'image.png',
            owner: true,
        }
    ]

    return (
        <View style={styles.container}>
           <FlatList
            data={guilds}
            keyExtractor={item => item.id}
            renderItem={({item})=>(
                <Guild
                    data={item}
                    onPress={() => handlerGuildSelect(item)}
                />
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListDivider/>}
            style={styles.guilds}
           /> 
        </View>
    )
}
