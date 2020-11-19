// importing
import express from 'express'
import cors from 'cors'

// app config
const app = express()
const port = process.env.PORT || 9000

// middleware
app.use(cors())
app.use(express.json())

// DB config

// ???

// api routes
app.get('/', (req, res) => res.status(200).send('Hi Universe!'))

// listen
app.listen(port, console.log(`Listening on localhost:${port}`))
