import React from 'react'
import exerciseImg from '../images/exercise.png'
import circlesImg from '../images/circles.png'
import './styles/Card.css'

class Card extends React.Component {
    //iniciar el estado del componente, enlazar eventos y setear variables globales
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         img: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
    //     }
    // }
    // // Esta funcion se ejecuta despues de que un componente sea cargardo en un mismo componente
    // //En esta funcion podes hacer llamados de API, suscripciones a eventos y modificar estado
    // componentDidMount(){
    //     setTimeout( () => {
    //         this.setState({
    //             img: `${exerciseImg}`
    //         })
    //     }, 5000)
    // }
    render() {
        const { title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor},${rightColor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right"></img>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Card