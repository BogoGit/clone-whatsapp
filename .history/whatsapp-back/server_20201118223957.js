// importing
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

// app config
const app = express()
const port = process.env.PORT || 9000

// middleware
app.use(cors())
app.use(express.json())

// DB config
const connection_url =
	'mongodb+srv://admin:myWhatsapp09@cluster0.isupv.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url)
// ???

// api routes
app.get('/', (req, res) => res.status(200).send('Hi Universe!'))

// listen
app.listen(port, console.log(`Listening on localhost:${port}`))
