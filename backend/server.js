const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require("cors")

const cors = require("cors");
connectDB()

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/api/practitionerUsers', require('./routes/practitionerUserRoutes'))
app.use('/api/practitionerProfiles', require('./routes/practitionerProfileRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))