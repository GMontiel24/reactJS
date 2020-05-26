import React from 'react'
import Card from '../components/Card'

const ExerciseList = ({ exercises }) => (
    <React.Fragment>
        {
            exercises.map((exercise) => {
                return (
                    <Card
                        key={exercise.id}
                        {...exercise}
                    />
                )
            })
        }
    </React.Fragment>
)

export default ExerciseList