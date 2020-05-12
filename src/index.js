// const element = document.createElement('h1')
// element.innerText= 'Hola React'
// no cree el elemento div xq ya lo tengo en public/index.html 
// const container = document.getElementById('root')
// agregamos a ese div el elemento "h1"
// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'


const user = {
  firstName: 'German',
  lastName: 'Montiel',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user) {
  return `${user.firstName} ${user.lastName}`
}

function getValidateUs(user) {
  if (user) {
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1> Hello Stranger </h1>
}


// const name = 'German'

const element = (
  <div >
    <h1> {getValidateUs(user)} </h1>
    <img src={user.avatar} />
  </div >
)
const container = document.getElementById('root')

// ReactDOM.render(__QUE_ELEMENTO, __DONDE__)

ReactDOM.render(element, container) 