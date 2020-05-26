import React from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButton from '../components/AddButton'
import Loading from '../components/Loading'
import FatalError from '../components/500'
import useAxios from '../hooks/useAxios'
import url from '../config'


const Exercises = () => {

    const { data, loading, error } = useAxios(`${url}/exercises/`)
 
    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return (
        <React.Fragment>
            <Welcome
                userName="PEPEE"
            />
            <ExerciseList
                exercises={data}
            />
            <AddButton />
        </React.Fragment>
    );

}

export default Exercises

// class Exercises extends React.Component {

//     state = {
//         data: [],
//         loading: true,
//         error: null
//     }
//     async componentDidMount() {
//         await this.fetchExercises()
//     }

//     fetchExercises = async () => {
//         try {
//             await axios('http://localhost:8000/api/exercises')
//                 .then(res => {
//                     console.log(res.data);
//                     const data = res.data;
//                     this.setState({
//                         data,
//                         loading: false
//                     });
//                 })
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error
//             })
//         }
//         //let res = await fetch ('http://localhost:8000/api/exercises')
//         // let data = await res.json()
//         // console.log(data)
//         // this.setState({
//         //     data
//         // })
//     }
//     render() {
//         if (this.state.loading)
//             return <Loading />
//         if (this.state.error)
//             return <FatalError />
//         return (
//             <React.Fragment>
//                 <Welcome
//                     userName="PEPEE"
//                 />
//                 <ExerciseList
//                     exercises={this.state.data}
//                 />
//                 <AddButton />
//             </React.Fragment>
//         );
//     }
// }

// export default Exercises