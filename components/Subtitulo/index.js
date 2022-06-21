import React from 'react';
import { View, Text,Image } from 'react-native';
import styles from './styles';

export default function Subtitulo(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Sinopse
            </Text>
            <Image
                    source={{uri:'https://i0.wp.com/www.otakupt.com/wp-content/uploads/2021/11/Spider-Man-No-Way-Home-teaser-poster.jpg?fit=1280%2C720&ssl=1'}}
                    style={styles.img}
                />
            <Text style={styles.Subtitulo}>
            O Homem-Aranha precisa lidar com as consequências da sua verdadeira identidade ter sido descoberta.
            </Text>
            <Text style={styles.autoria}>
                Maria Vitoria e Karla Azevedo
            </Text>
        </View>
        
    );
}
