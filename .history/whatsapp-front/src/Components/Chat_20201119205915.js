import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import MicIcon from '@material-ui/icons/Mic'

const Chat = ({ messages }) => {
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
					<p className={`chat__message ${message.sender && 'chat__sender'}`}>
						<span className='chat__name'>{message.name}</span>
						{message.message}
						<span className='chat__timestamp'>{message.timestamp}</span>
					</p>
				))}
			</div>
			<div className='chat__footer'>
				<InsertEmoticonIcon />
				<form>
					<input placeholder='Type a message...' type='text' />
					<button onChange={handleChange} type='submit'>
						Send a Message
					</button>
				</form>
				<MicIcon />
			</div>
		</div>
	)
}

export default Chat
