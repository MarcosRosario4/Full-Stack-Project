import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'

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


useEffect (()=> {
  if(!albums){
  } getAlbums()
}, [])


let renderAlbums = () => {
  if(albums){
    return albums.map((album, index)=> {
      return (
        <div key={index}>
          <h2>
            {album.title}
            </h2>

          <h3>
            {album.author}
            </h3>

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
      <Form/>
      <div>
        {loading ? renderLoading : renderAlbums()}
      </div>
    </div>

  )
}

export default App
