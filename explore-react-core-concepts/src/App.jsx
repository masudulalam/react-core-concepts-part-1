// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// http://localhost:5173/
function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Start></Start>
      <Person></Person>
      <Student></Student>

    </>
  )
}

function Start() {
  return <h3>In the name of Allah, The Entirely Merciful, The Especially Merciful.</h3>
}

function Person(){
  const name = 'Abdullah';
  const age = 42;
  return <h3>I am {name}, {age} years old.</h3>
}

function Student() {
  const name = 'Abdullah';
  const age = 6;
  return (
    <div> 
        <h3>This is a student</h3>
        <p>Name: {name}</p>
        <p>Age:{age}</p>
    </div>
  )
}

export default App
