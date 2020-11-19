// importing
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dbMessages from './dbMessages.js'

// app config
const app = express()
const port = process.env.PORT || 9000

// middleware
app.use(cors())
app.use(express.json())

// DB config
const connection_url =
	'mongodb+srv://admin:myWhatsapp09@cluster0.isupv.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
// ???

// api routes
app.get('/', (req, res) => res.status(200).send('Hi Universe!'))
app.post('/api/v1/messages/new', (req, res) => {
	const dbMessage = req.body
	dbMessages.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(201).send(data)
		}
	})
})

// listen
app.listen(port, console.log(`Listening on localhost:${port}`))
