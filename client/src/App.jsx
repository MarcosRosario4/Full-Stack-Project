import { useState, useEffect } from 'react'
import './App.css'

function App() {

let [albums, setAlbums] = useState(null)
let [loading, setLoading] = useState(false)


let getAlbums = async () => {
  try {
    setLoading(true)
    let response = await fetch("http://localhost:4000/albums")
    let data = await response.json()
    console.log(data)
    setAlbums(data)
    setLoading(false)

  } catch(error) {
    console.log(error)
  }

}

let createAlbum = async () => {

}

useEffect (()=> {
  getAlbums()

}, [])


let renderAlbums = () => {
  if(albums){
    return albums.map((album)=> {
      return (
        <div>
          <h2>{album.title}</h2>
          <h3>{album.author}</h3>
        </div>
      )
    })
  } else {
    return <div>No albums found!</div>
  }
}

let renderLoading = () => {
  return (
    <div> ...Loading</div>
  )
}

  return (

    <div>
      <h1>Welcome to Music World</h1>
      <div>
        {loading ? renderLoading : renderAlbums()}
      </div>
    </div>

  )
}

export default App
