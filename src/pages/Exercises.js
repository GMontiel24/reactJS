import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'

class Exercises extends React.Component {

    state = {
        data: []
    }
    async componentDidMount() {
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        let res = await fetch('http://localhost:8000/api/exercises')
        let data = await res.json()
        console.log(data)
        this.setState({
            data
        })
    }
    render() {
        return (
            <div>
                <Welcome
                    userName="PEPEE"
                />
                <ExerciseList
                    exercises={this.state.data}
                />
                <AddButton />
            </div>
        );
    }
}

export default Exercises