// Common JS
const express = require('express');
const app = express();
const superheroes = require('./Superheroes')

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

// GET
app.get('/api/superheroes', (req, res) => {
    res.json({msg: 'Getting All Heroes'})
})

app.get('/api/superheroes/:id', (req, res) => {
    res.json({msg: `Getting A Hero ${req.params.id}`
            })
})

// CREATE
app.post('/api/superheroes', (req, res) => {
    res.json({msg: 'Creating All Heroes'})
})

// UPDATE
app.put('/api/superheroes', (req, res) => {
    res.json({msg: `Updating a Hero ${req.params.id}`})
})

// DELETE
app.delete('/api/superheroes/:id', (req, res) => {
    res.json({msg: `Delete A Hero ${req.params.id}`})
})

app.listen(5000, () => console.log("Listening on port 5000"));