import React from 'react'

import { useState, useEffect } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Card } from '../components/Card/Card'


export function Home() {
    const [cards, setCards] = useState(['Easy', 'Medium', 'Advanced'])

    function getLevel(level) {
        console.log(level);
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000'
        }}>
            {cards.map(level => (
                <Card title={level} level={getLevel(level)} />
            ))}

        </SafeAreaView>
    )
}