
// Importing express into application
const express = require('express');
const router = express.Router()

const app = express()

// Uses mongodb
const mongoose = require('mongoose');

// Connects to the mongodb server
mongoose.connect('mongodb+srv://elanadevteam:elanateam1@cluster0.lpz6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.listen('3001', () => {
    console.log('The Elana server is running...')
})

router.get('/', () => {
    res.send('This is running I hope')
})