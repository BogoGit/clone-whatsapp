import React from 'react'
import { Avatar, IconButton } from '@material-ui/core'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons'

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
					<IconButtontton>
						<DonutLargeIcon />
					</IconButtontton>
					<IconButton>
						<ChatIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
		</div>
	)
}

export default Chat
