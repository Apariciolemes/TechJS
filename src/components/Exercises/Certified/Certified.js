import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'

export function Certified({ isApproved }) {
    return (
        <>
            {isApproved ?
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/feliz.png')}
                />
                :
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/triste.png')}
                />
            }
            <View style={{
                width: 350,
                paddingVertical: 40,
                borderRadius: 8,
                marginVertical: 10,
                backgroundColor: isApproved ? 'green' : 'red'
            }} >
                <Text style={styles.title}> {isApproved ? 'Parabéns você foi aprovado, agora você pode retirar a sua certificação através do nosso site www.unilearningjs.com.br' : 'Que pena, não foi desta vez, revise o nosso conteúdo e tente novamente!!'} </Text>
            </View>
        </>

    )

}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 24,
    },
    tinyLogo: {
        width: 150,
        height: 150,
        marginBottom: 24
    }
})
