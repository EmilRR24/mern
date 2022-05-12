// Common JS
const express = require('express');
const app = express();
const superhero = require('./Superheroes')
// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

// GET
app.get('/api/superheroes', (req, res) => {
    res.json({msg: 'Getting All Heroes', superhero})
})

app.get('/api/superheroes/:id', (req, res) => {
    console.log(`Getting A Hero ${req.params.id}`)
    const foundHero = superhero.filter((hero)=> hero.id == req.params.id);
    res.json({
            data: foundHero
        });
})

// CREATE
app.post('/api/superheroes', (req, res) => {
    res.json({msg: 'Creating A Hero'})
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