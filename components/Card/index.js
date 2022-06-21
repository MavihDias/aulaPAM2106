import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function Card(){
    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Image
                    source={{uri:'https://upload.wikimedia.org/wikipedia/pt/0/00/Spider-Man_No_Way_Home_poster.jpg'}}
                    style={styles.img}
                />
                <Text style={styles.texto}>
                    Após lançamento nos cinemas, 'Spider-Man: No Way Home' é um sucesso nas bilheterias
                </Text>
            </View>
        </View>
    );
}