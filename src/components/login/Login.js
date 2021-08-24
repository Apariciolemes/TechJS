import React from 'react'
import { Platform, TextInput, View, Platform, TouchableOpacity } from 'react-native'

export function Login() {
    return (
        <View>
            <TextInput style={styles.input} placeholder="Login" placeholderTextColor="#555" />
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#555" />

            <TouchableOpacity>
                Acessar
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({

    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 2,
    }
})