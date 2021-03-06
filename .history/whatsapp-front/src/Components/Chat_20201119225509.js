import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import {
	AttachFile,
	MoreVert,
	SearchOutlined,
	Delete,
} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'
import axios from '../axios'

const Chat = ({ messages }) => {
	const [input, setInput] = useState('')

	const sendMessage = (e) => {
		e.preventDefault()
		axios.post('/api/v1/messages/new', {
			message: input,
			name: 'BoGo',
			timestamp: '9:13pm',
			sender: true,
		})
		setInput('')
	}

	const deleteMessage = (e) => {
		console.log(ReactDOM)
		// const id = e.target.parent.key
		// axios.delete('/api/v1/messages/delete')
	}

	return (
		<div className='chat'>
			<div className='chat__header'>
				<Avatar />
				<div className='chat__headerInfo'>
					<h3>Room Name</h3>
					<p>Last seen at...</p>
				</div>
				<div className='chat__headerRight'>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVert />
					</IconButton>
				</div>
			</div>
			<div className='chat__body'>
				{messages.map((message) => (
					<p
						className={`chat__message ${message.sender && 'chat__sender'}`}
						key={message._id}
					>
						<span className='chat__delete'>
							<Delete onClick={deleteMessage} />
						</span>
						<span className='chat__name'>{message.name}</span>
						{message.message}
						<span className='chat__timestamp'>{message.timestamp}</span>
					</p>
				))}
			</div>
			<div className='chat__footer'>
				<InsertEmoticonIcon />
				<form>
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder='Type a message...'
						type='text'
					/>
					<button onClick={sendMessage} type='submit'>
						Send a Message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	)
}

export default Chat
