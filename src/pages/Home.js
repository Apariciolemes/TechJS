import React from 'react'
import { useState, useEffect } from 'react'
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { Card } from '../components/Card/Card'
import { CourseClasses } from '../components/CourseClasses/CourseClasses'
import { Exercises } from '../components/Exercises/Exercises'
import { Login } from '../components/Login/Login'
import db from '../components/services/db.json'


export function Home() {
    const [cards, setCards] = useState(['Fácil', 'Médio', 'Avançado'])
    const [showExercises, setShowExercises] = useState(false)
    const [isComponent, setComponent] = useState(undefined)
    const [contentByLevel, setContentByLevel] = useState([])
    const [exercisesByLevel, setExercisesByLevel] = useState([])
    const [valuesCourses, setValuesCourses] = useState({ description: undefined, title: undefined })
    const [positionContent, setPositionContent] = useState(-1)

    useEffect(() => {
        if (contentByLevel.length && positionContent >= 0) {
            setValuesCourses({ description: contentByLevel[positionContent].description, title: contentByLevel[positionContent].title })
        }

    }, [positionContent]);

    function previewHome() {
        setPositionContent(-1)
        setContentByLevel([])
        setExercisesByLevel([])
        setShowExercises(false)
    }

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

        const filterExercisesByLevel = db.courses.filter(content => content.level === level)[0].exercises
        if (filterExercisesByLevel) {
            setExercisesByLevel([...filterExercisesByLevel])

        }
    };


    function handleNext() {
        if (positionContent < contentByLevel.length - 1) {
            setPositionContent(positionContent + 1)
            return
        }

        setShowExercises(true)
        return
    }


    return (
        <SafeAreaView style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#111'
        }}>
            {positionContent < 0 && <Text style={styles.title}>Escolha o seu nível!!!!!</Text>}
            {positionContent < 0 && <Text style={styles.subTitle}>Aprenda agora mesmo conosco, selecione o card baseado no seu conhecimento.</Text>}
            {cards.map((level, index) => (
                positionContent < 0 &&
                <TouchableOpacity onPress={() => handleGetLevel(level)} key={index}>
                    <Card key={index} title={level} />
                </TouchableOpacity>
            ))}
            {positionContent >= 0 && !showExercises ? <CourseClasses title={valuesCourses?.title} description={valuesCourses?.description} /> : positionContent > 0 && showExercises ? <Exercises goTo={() => previewHome()} exercises={exercisesByLevel.length ? exercisesByLevel : []} /> : null}
            {positionContent >= 0 && !showExercises ? <View style={styles.viewBtn}>
                <TouchableOpacity style={styles.btns} onPress={() => setPositionContent(positionContent - 1)}>
                    <Text style={styles.btnText}>Anterior</Text>
                </TouchableOpacity>
                {<TouchableOpacity style={styles.btns} onPress={() => handleNext()}>
                    <Text style={styles.btnText}>{positionContent < contentByLevel.length - 1 ? "Próximo" : 'Iniciar Exercícios'}</Text>
                </TouchableOpacity>
                }
            </View> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    viewBtn: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '12%',
        width: '100%',
        paddingHorizontal: 25,
    },
    btns: {
        borderRadius: 16,
        paddingHorizontal: 24,
        paddingVertical: 8,
        backgroundColor: '#662d91',
    },
    btnText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: "700",
    },
    title: {
        width: '100%',
        paddingHorizontal: 15,
        textAlign: 'center',
        color: '#662d91',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 4,
        textTransform: 'uppercase',
    },
    subTitle: {
        width: '100%',
        paddingHorizontal: 15,
        textAlign: 'center',
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
        opacity: 0.9
    }
})