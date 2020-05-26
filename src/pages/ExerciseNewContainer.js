import React, { useState } from 'react'
import '../components/styles/ExerciseNew.css'
import axios from 'axios'
import Error from '../components/500'
import Loading from '../components/Loading'
import ExerciseNew from '../pages/ExerciseNew'
import url from '../config'

const ExerciseNewContainer = () => {

    const [form, setForm] = useState({
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        setLoading(true)
        e.preventDefault();
        try {
            await axios.post(`${url}/exercises`, { form })
                .then(res => {
                    console.log(res.data);
                })
            setLoading(false)
            this.props.history.push('/exercise')

        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    if (loading)
        return <Loading />
    if (error)
        return <Error></Error>

    return <ExerciseNew
        form={form}
        onChange={handleChange}
        onSubmit={handleSubmit} />
}

export default ExerciseNewContainer

// class ExerciseNewContainer extends React.Component {

//     state = {
//         form: {
//             title: '',
//             description: '',
//             img: '',
//             leftColor: '',
//             rightColor: ''
//         },
//         loading: false,
//         error: null
//     }

//     handleChange = e => {
//         this.setState({
//             form: {
//                 ///con esto le decimos que mantenga todo lo anterior,
//                 //si tiene un nuevo valor lo sobre escribe
//                 ...this.state.form,
//                 [e.target.name]: e.target.value

//             }
//         })
//     }


//     handleSubmit = async e => {
//         this.setState({
//             loading: true
//         })
//         const form = this.state.form;
//         e.preventDefault();
//         try {
//             // let config = {
//             //     method: 'POST',
//             //     headers: {
//             //         'Accept': 'application/json',
//             //         'Content-Type': 'application/json'
//             //     },
//             //     body: JSON.stringify(this.state.form)
//             // }

//             // let res = await fetch('http://localhost:8000/api/exercises', config)
//             // let json = res.json()
//             await axios.post(`http://localhost:8000/api/exercises`, { form })
//                 .then(res => {
//                     console.log(res.data);
//                 })
//             this.setState({
//                 loading: false
//             })

//             this.props.history.push('/exercise')
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error
//             })
//         }
//     }

//     render() {
//         if (this.state.loading)
//             return <Loading />
//         if (this.state.error)
//             return <Error></Error>

//         return <ExerciseNew
//             form={this.state.form}
//             onChange={this.handleChange}
//             onSubmit={this.handleSubmit} />
//     }
// }

// export default ExerciseNewContainer