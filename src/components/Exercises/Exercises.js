import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import { CheckBox, Icon } from 'react-native-elements'


export function Exercises({ exercises }) {

    const [exercisesState, setExercisesState] = useState(undefined)

    useEffect(() => {
        if (!exercisesState) {
            setExercisesState(exercises)
            console.log('exercisesState ->', exercisesState);

        }

    }, []);

    function clear() {
        const exercisesValues = exercisesState.options.values
        exercisesValues.forEach(exercise => {
            exercise.checked = false
        });
        setExercisesState(exercisesState)
    }

    // ID 2 
    function onPressCheckBox(id) {
        console.log('id', id);
        clear()
        const exercisesValues = exercisesState.options.values
        // 2 === 2
        const exercise = exercisesValues.find(exercise => exercise.id === id)



        if (exercise) {
            exercise.checked = true
            setExercisesState(exercisesState)
            console.log('exercesisState modificada', JSON.stringify(exercisesState));
            console.log('onPressCheckBox - ID', exercise.id);
            console.log('onPressCheckBox - CHECKED', exercise.checked);
            return
        }
    }

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
                }}> Questão </Text>

                {exercisesState?.options.values.map(exercise => {
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