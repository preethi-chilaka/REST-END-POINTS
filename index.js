const express = require('express')
const app = express()

const questions = [
    {
        question:"how to install python",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"python, pip, query"
    },
    {
        question:"how to install python1",
        slug:"how-to-install-python1",
        votes:3,
        views:10,
        tags:"python1, pip, query"
    },
    {
        question:"how to install python2",
        slug:"how-to-install-python2",
        votes:3,
        views:10,
        tags:"python2, pip, query"
    }
]

app.get('/', (req, res)=>{
    res.send("Home")
})

app.get('/questions', (req, res)=>{

    res.send(questions)
})

app.get('/questions/:slug', (req, res)=>{
    console.log(req.params.slug)
    const slug = req.params.slug
    questions.map(obj => {
        if (obj.slug === slug){
            res.send(obj)
        }

    })
    res.send("Question not found")
})

app.get('/users', (req, res) => {
    res.send("Users")
})

app.get('/tags', (req, res) => {
    res.send("Tags")
})

app.get('/jobs/companies', (req, res) => {
    res.send("Companies")
})

app.listen(1234, () => {
    console.log("Listening...")
})