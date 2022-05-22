import React, { useState } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'
import { Card, Avatar, AirbnbRating } from "react-native-elements"

export default function Information({ route, navigation }) {

    const [avaliacao, setAvaliacao] = useState(5)

    function ratingCompleted(rating) {
        setAvaliacao(rating)
    }

    return (
        <View>
            <Card containerStyle={styles.card} wrapperStyle={{}}>
                <View style={styles.avatar} >
                    <Avatar rounded size='xlarge' source={{ uri: route.params?.user.avatarUrl }} />
                </View>
                <Card.Title style={styles.cardTitle} >{route.params?.user.name}</Card.Title>
                <Card.Divider />
                <View>
                    <Text style={styles.infoText}>Informações do contato</Text>
                    <Text style={styles.text}>Nome: {route.params?.user.name}</Text>
                    <Text style={styles.text}>Profissão: {route.params?.user.profissao}</Text>
                    <Text style={styles.text}>E-mail: {route.params?.user.email}</Text>
                </View>
            </Card>

            <Card containerStyle={styles.card} wrapperStyle={{}}>
                <View>
                    <AirbnbRating
                        count={5}
                        reviews={['Péssimo', 'Ruim', 'Bom', 'Muito bom', 'Ótimo']}
                        defaultRating={5}
                        size={20}
                        onFinishRating={ratingCompleted}
                    />
                </View>
            </Card>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Contatos')}
            >
                <FontAwesome name='arrow-left' size={23} color='#fff'></FontAwesome>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
