import { useState, useEffect } from 'react'
import './App.css'

function App() {

let getAlbums = async () => {
  try {
    let response = await fetch("http://localhost:4000/albums")
    let data = await response.json()
    console.log(data)
  } catch(error) {
    console.log(error)
  }

}

let createAlbum = async () => {

}

useEffect (()=> {
  getAlbums()

}, [])


  return (

    <div>
      <h1>Welcome to Music World</h1>
      <div></div>
    </div>

  )
}

export default App
