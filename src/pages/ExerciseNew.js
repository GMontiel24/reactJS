import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ///con esto le decimos que mantenga todo lo anterior,
                //si tiene un nuevo valor lo sobre escribe
                ...this.state.form,
                [e.target.name]: e.target.value

            }
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={this.handleChange}
                        form={this.state.form} />
                </div>
            </div>
        )
    }
}

export default ExerciseNew