require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()

const dbConnection = require('./db')

const projectRoutes = require('./Routes/projectRoutes');
const imageRoutes = require('./Routes/imageRoutes');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/project', projectRoutes)
app.use('/image', imageRoutes)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
