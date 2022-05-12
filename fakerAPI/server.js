// Common JS
const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker')
const Users = require('./Users')
const Companies = require('./Companies')

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// GET HOMEPAGE
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})
// GET NEW USER
app.get('/api/users/new', (req, res) => {
    res.json(new Users());
})
// GET NEW COMPANY
app.get('/api/companies/new', (req, res) => {
    res.json(new Companies());
})
// GET NEW USER AND COMPANY
app.get('/api/user/company', (req, res) => {
    res.json({'user':new Users(),'company':new Companies()});
})

app.listen(5000, () => console.log("Listening on port 5000"));