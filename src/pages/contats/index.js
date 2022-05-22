import React from 'react'
import { Text, View, FlatList } from 'react-native'
import styles from './style'
import users from '../../data/user'
import { ListItem, Avatar } from 'react-native-elements'

export default function Contacts({ navigation }) {

    function getUserItem({ item: user }) {
        return (
            <View styles={{ flex: 1 }}>
                <ListItem key={user.id} bottomDivider >
                    <Avatar rounded size='large' source={{ uri: user.avatarUrl }} />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                        <Text
                            style={styles.textInformation}
                            onPress={() => navigation.navigate('Information', { user })}
                        >Mais informações</Text>
                    </ListItem.Content>
                </ListItem>
            </View>
        )
    }

    return (
        <View style={styles.viewContact}>
            <FlatList
                data={users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View >
    )
}