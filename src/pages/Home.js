import React from 'react'

import { useState, useEffect } from 'react'
import { Alert, SafeAreaView, Text, TouchableOpacity, Button, StyleSheet, View } from 'react-native'
import { Card } from '../components/Card/Card'
import { CourseClasses } from '../components/CourseClasses/CourseClasses'
import db from '../components/services/db.json'


export function Home() {
    const [cards, setCards] = useState(['easy', 'medium', 'advanced'])
    const [isComponent, setComponent] = useState(undefined)
    const [contentByLevel, setContentByLevel] = useState([])
    const [valuesCourses, setValuesCourses] = useState({ description: 'teste', title: 'teste' })
    const [positionContent, setPositionContent] = useState(-1)

    useEffect(() => {

        if (contentByLevel.length && positionContent >= 0) {
            setValuesCourses({ description: contentByLevel[positionContent].description, title: contentByLevel[positionContent].title })
        }


    }, [positionContent]);

    function handleGetLevel(level) {
        setComponent(level)
        setPositionContent(0)
        const filterContentByLevel = db.courses.filter(content => content.level === level)[0].contentLevel

        if (filterContentByLevel) {
            setContentByLevel([...filterContentByLevel])
        }

        if (contentByLevel.length) {
            setValuesCourses({ description: filterContentByLevel[0].description, title: filterContentByLevel[0].title })
        }

    };
    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000'
        }}>
            {cards.map((level, index) => (
                positionContent < 0 &&
                <TouchableOpacity onPress={() => handleGetLevel(level)}>
                    <Card key={index} title={level} />
                </TouchableOpacity>
            ))}
            {positionContent >= 0 && <CourseClasses title={valuesCourses?.title} description={valuesCourses?.description} />}
            {positionContent >= 0 && <View style={styles.viewBtn}>
                <Button title="Anterior" onPress={() => setPositionContent(positionContent - 1)}
                    color="#841584" />
                <Button title="Próximo" onPress={() => setPositionContent(positionContent + 1)}
                    color="#841584" />
            </View>}


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewBtn: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '35%',
        width: '60%'
    },
})