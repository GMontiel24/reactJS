import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'


const container = document.getElementById('root')

// ReactDOM.render(__QUE_ELEMENTO, __DONDE__)
ReactDOM.render( <App /> , container)


// ReactDOM.render(<Card
//                 title="Technique Guides"
//                 description="Learn amazing street workout and calisthenics"
//                 img={exerciseImg}
//                 leftColor="#A74CF2"
//                 rightColor="#617BFB"
//               />, container) 