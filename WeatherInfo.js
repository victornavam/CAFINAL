import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function WeatherInfo({ currentWeather }) {
    const {
        main: { temp },
        weather: [details],
        name,
    } = currentWeather
    const { icon, main, description } = details

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text>{name}</Text>
            <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
            <Text style={styles.textPrimary}>{temp}°</Text>
            <Text style={styles.weatherDescription}>{description}</Text>
            <Text style={styles.texSecondary}>{main}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
        marginTop: 5,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: 'coral',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    weatherDescription: {
        textTransform: 'capitalize',
        marginTop: 5,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: 'coral',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    textPrimary: {
        fontSize: 40,
        
    },
    texSecondary: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
       
    },
    title: {
        paddingVertical: 8,
        color: '#20232a',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
      text: {
        marginTop: 5,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: 'coral',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
      },
})