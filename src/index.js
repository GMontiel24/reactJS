// const element = document.createElement('h1')
// element.innerText= 'Hola React'
// no cree el elemento div xq ya lo tengo en public/index.html 
// const container = document.getElementById('root')
// agregamos a ese div el elemento "h1"
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'
import exerciseImg from './images/exercise.png'


const container = document.getElementById('root')

// ReactDOM.render(__QUE_ELEMENTO, __DONDE__)

ReactDOM.render(<Card
                title="Technique Guides"
                description="Learn amazing street workout and calisthenics"
                img={exerciseImg}
                leftColor="#A74CF2"
                rightColor="#617BFB"
              />, container) 