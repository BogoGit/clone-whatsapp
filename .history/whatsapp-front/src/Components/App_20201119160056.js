import React, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Pusher from 'pusher-js'
import axios from '..axios'

function App() {
	const [messages, setMessages] = useState([])
	useEffect(() => {
		axios.get('/api/v1/messages/sync').then((response) => {
			console.log(response)
		})
	}, [])
	useEffect(() => {
		const pusher = new Pusher('64733a61f8ea7afb4f3e', {
			cluster: 'us2',
		})

		const channel = pusher.subscribe('messages')
		channel.bind('inserted', function (data) {
			alert(JSON.stringify(data))
		})
	}, [])
	return (
		<div className='app'>
			<div className='app__body'>
				<Sidebar />
				<Chat />
			</div>
		</div>
	)
}

export default App
