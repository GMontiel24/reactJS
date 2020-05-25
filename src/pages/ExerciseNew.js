import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'
import '../components/styles/ExerciseNew.css'
import axios from 'axios'
import Error from '../components/500'
import Loading from '../components/Loading'

class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        },
        loading: false,
        error: null
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


    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        const form = this.state.form;
        e.preventDefault();
        try {
            // let config = {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(this.state.form)
            // }

            // let res = await fetch('http://localhost:8000/api/exercises', config)
            // let json = res.json()
            await axios.post(`http://localhost:8000/api/exercises`, { form })
                .then(res => {
                    console.log(res.data);
                })
            this.setState({
                loading: false
            })

            this.props.history.push('/exercise')
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render() {
        if (this.state.loading)
            return <Loading />
        if (this.state.error)
            return <Error></Error>
        return (
            <div className="row NewForm">
                <div className="col-sm">
                    <Card {...this.state.form} />
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        form={this.state.form} />
                </div>
            </div>
        )
    }
}

export default ExerciseNew