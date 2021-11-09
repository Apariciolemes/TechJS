import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export function CourseClasses({ description, title }) {
    return (
        <View style={styles.container}>
            <Text style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 23,
                marginBottom: 25,
            }}>{title}</Text>
            <Text style={{
                color: '#fff',
                fontSize: 20,
                fontStyle: 'italic'
            }}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '35%',
        width: '66%'
    }
})