const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const taskRoutes = require('./route/task')
const cors = require('cors')
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(cors())

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', taskRoutes)

connectDB()

app.listen(PORT, () => {
    console.log('server is running on', PORT);
})