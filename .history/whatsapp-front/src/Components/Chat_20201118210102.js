import React from 'react'
import { Avatar } from '@material-ui/core'

const Chat = () => {
	return (
		<div class='chat'>
			<div className='chat__header'>
				<Avatar />
				<div className='chat__headerInfo'>
					<h3>Room Name</h3>
					<p>Last seen at...</p>
				</div>
			</div>
		</div>
	)
}

export default Chat
