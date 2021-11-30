import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react'
import { CheckBox, Icon } from 'react-native-elements'
import { Certified } from './Certified/Certified'


export function Exercises({ exercises, goTo }) {

    const [exercisesState, setExercisesState] = useState([])
    const [positionExercise, setPositionExercise] = useState(0)
    const [results, setResults] = useState([])
    const [selectedId, setSelectedId] = useState(undefined)
    const [showCertified, setShowCertified] = useState(false)
    const [isApproved, setIsApproved] = useState(false)

    useEffect(() => {
        setExercisesState([...exercises])
    }, []);

    function clear() {
        if (exercisesState[positionExercise]) {
            const exercisesValues = exercisesState[positionExercise]?.options?.values

            if (exercisesValues) {
                exercisesValues.forEach(exercise => {
                    exercise.checked = false
                });
                setExercisesState([...exercisesState])
            }
        }


    }


    function handleNext() {
        setResults([...results, selectedId])
        console.log('results', results);
        if (exercisesState && positionExercise < exercisesState.length - 1) {
            setPositionExercise(positionExercise + 1)
            return
        }
        const quantityExercises = exercisesState.length
        const resultsCorrect = exercisesState.filter((element, index) => element.options.idIsCorrect === results[index]).length
        const calculateMedia = (resultsCorrect / quantityExercises) * 100
        if (calculateMedia < 60) setIsApproved(false)
        else setIsApproved(true)

        setShowCertified(true)

    }

    function onPressCheckBox(id) {
        clear()
        if (exercisesState) {
            const exercisesValues = exercisesState[positionExercise].options.values
            const exercise = exercisesValues.find(exercise => exercise.id === id)

            if (exercise) {
                exercise.checked = true
                setExercisesState([...exercisesState])
                setSelectedId(exercise.id)
                return
            }
        }

    }

    return (
        <>
            {showCertified ? <View style={{
                textAlign: 'center',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%'
            }}>
                <Certified isApproved={isApproved} />
                {<TouchableOpacity style={{
                    borderRadius: 16,
                    paddingHorizontal: 24,
                    textAlign: 'center',
                    width: 200,
                    marginTop: 20,
                    paddingVertical: 8,
                    backgroundColor: '#662d91',
                }} onPress={() => goTo()}>
                    <Text style={{
                        color: '#FFF',
                        fontSize: 20,
                        textAlign: 'center',
                    }}>Voltar ao Inicio</Text>
                </TouchableOpacity>
                }
            </View> : <SafeAreaView style={styles.container}>
                <ScrollView >
                    <Text style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 32,
                        textAlign: 'center',
                        marginTop: 20
                    }}> Questionário </Text>

                    <Text style={{
                        color: '#fff',
                        fontSize: 24,
                        marginBottom: 25,
                        textAlign: 'left',
                        marginTop: 20,
                        paddingHorizontal: 25,
                    }}> {exercisesState.length ? exercisesState[positionExercise].enunciation : null} </Text>

                    <View style={{
                        paddingHorizontal: 25,
                    }}>
                        {exercisesState[positionExercise]?.options?.values.map(exercise => {
                            return (
                                <CheckBox
                                    checkedIcon={
                                        <Icon
                                            name="radio-button-checked"
                                            type="material"
                                            color="green"
                                            size={25}
                                            iconStyle={{ marginRight: 10 }}
                                        />
                                    }
                                    key={exercise.id}
                                    title={exercise.description}
                                    onPress={() => onPressCheckBox(exercise.id)}
                                    checked={exercise.checked}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
                {exercisesState.length ? <View style={styles.viewBtn}>
                    <TouchableOpacity style={styles.btns} onPress={() => clear()}>
                        <Text style={styles.btnText}>Limpar</Text>
                    </TouchableOpacity>
                    {<TouchableOpacity style={styles.btns} onPress={() => handleNext()}>
                        <Text style={styles.btnText}>{positionExercise < exercisesState.length - 1 ? "Próximo" : 'Resultado'}</Text>
                    </TouchableOpacity>
                    }
                </View> : null}
            </SafeAreaView>}
        </>





    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    viewBtn: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '15%',
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
})