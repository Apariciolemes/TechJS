import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, } from 'react-native'

export function CourseClasses({ description, title }) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{
                borderRadius: 32,
                marginHorizontal: 15,

            }}>
                <Text style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 32,
                    marginBottom: 25,
                    textAlign: 'center',
                    marginTop: 20
                }}>{title}</Text>
                <View style={{
                    borderRadius: 32,
                    backgroundColor: '#662d91',
                }}>
                    <Text style={{
                        paddingVertical: 15,
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: '100',
                        textAlign: 'justify',
                        paddingHorizontal: 25,

                    }}>{description}</Text>
                </View>
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