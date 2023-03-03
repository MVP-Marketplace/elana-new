const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 3001
const cors = require("cors")

// Connect to Mongo Database
connectDB()

// Create Express application
const app = express()

// Add dependencies to the Express Application
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Adding routes to Express Application
app.use('/api/practitionerUsers', require('./routes/practitionerUserRoutes'))
app.use('/api/practitionerProfiles', require('./routes/practitionerProfileRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))