// importing
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Messages from './dbMessages.js'
import Pusher from 'pusher'

// app config
const app = express()
const port = process.env.PORT || 9000
const pusher = new Pusher({
	appId: '1106616',
	key: '64733a61f8ea7afb4f3e',
	secret: 'f07baa51c6962045bbab',
	cluster: 'us2',
	useTLS: true,
})

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
app.get('/api/v1/messages/sync', (req, res) => {
	const dbMessage = req.body
	Messages.find((err, data) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(200).send(data)
		}
	})
})
app.post('/api/v1/messages/new', (req, res) => {
	const dbMessage = req.body
	Messages.create(dbMessage, (err, data) => {
		if (err) {
			res.status(500).send(err)
		} else {
			res.status(201).send(data)
		}
	})
})

// listen
app.listen(port, console.log(`Listening on localhost:${port}`))
