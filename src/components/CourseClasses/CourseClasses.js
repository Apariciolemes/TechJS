import React from 'react';
import { StyleSheet, View, Text } from 'react-native'

export function CourseClasses({ description, title }) {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
            <Text>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})