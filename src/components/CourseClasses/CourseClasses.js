import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, } from 'react-native'

export function CourseClasses({ description, title }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginBottom: 25,
                    textAlign: 'center',
                    marginTop: 20
                }}>{title}</Text>
                <Text style={{
                    color: '#fff',
                    fontSize: 24,
                    textAlign: 'justify',
                    paddingHorizontal: 25
                }}>{description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',


    }
})