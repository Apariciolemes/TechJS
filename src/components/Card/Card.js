import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export function Card({ title }) {
    return (
        <View style={styles.cardWrraper}>
            <Text style={styles.title}> {title} </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    cardWrraper: {
        backgroundColor: '#662d91',
        width: 220,
        paddingVertical: 30,
        borderRadius: 10,
        marginVertical: 10
    },
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
    }
})

