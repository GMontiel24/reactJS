import React from 'react'
import {Link} from 'react-router-dom'
import buttonImg from '../images/add.png'
import './styles/button.css'

const AddButton = () => (
    <Link to="/exercise/new" >
        <img src={buttonImg}  className="Add" alt="exercise"></img>
    </Link>
)

export default AddButton