
const express = require('express')

const cors = require(`cors`)

const app = express()

const port = 4000;

app.use(express.json())

app.use(cors())

app.get('/', (req, res)=>{
    res.json({ info: 'This is a Node/Express App'})
})

app.post('/albums', (req, res)=>{
    

    let {author, title} = req.body
    
    if(author && title) {
        console.log(`Creating a new album! ${title} by ${author}`)
        res.json({id: 1, title, author})

    } else {
        console.log("Error creating album!")
        res.status(400).send("Error creating album! Albums need a title and author")
    }
})


app.get('/albums', (req, res)=>{
    let data = [
        {
            author: "Tupac",
            title: "All Eyez On Me"
        }, 
        {
            author: "Young Jeezy",
            title: "TM 101"
        },
        {
            author: "Nipsey Hussle",
            title: "Victory Lap"
        }
    ]
    res.json(data)
})


app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})