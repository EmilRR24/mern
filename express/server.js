// Common JS
const express = require('express');
const app = express();
const superhero = require('./Superheroes')

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})



app.get('/api/superheroes', (req, res) => {
    res.json({msg: 'Getting All Heroes'})
})

app.post('/api/superheroes', (req, res) => {
    res.json({msg: 'Creating All Heroes'})
})

app.listen(5000, () => console.log("Listening on port 5000"));