import React from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'

const Chat = () => {
	return (
		<div class='chat'>
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
				<p className='chat__message'>
					<span className='chat__name'>Someone else</span>I am message
					<span className='chat__timestamp'>{new Date().toUTCString()}</span>
				</p>
				<p className='chat__message'>
					<span className='chat__name'>Someone else</span>I am message
					<span className='chat__timestamp'>{new Date().toUTCString()}</span>
				</p>
				<p className='chat__message chat__sender'>
					<span className='chat__name'>You</span>I am message
					<span className='chat__timestamp'>{new Date().toUTCString()}</span>
				</p>
				<p className='chat__message'>
					<span className='chat__name'>Someone else</span>I am message
					<span className='chat__timestamp'>{new Date().toUTCString()}</span>
				</p>
			</div>
			<div className='chat__footer'>
				<InsertEmoticonIcon />
				<form>
					<input placeholder='Type a message...' type='text' />
				</form>
			</div>
		</div>
	)
}

export default Chat
