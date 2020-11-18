import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton } from '@material-ui/core'

const Sidebar = () => {
	return (
		<div class='sidebar'>
			<div className='sidebar__header'>
				<Avatar src='https://https://media-exp1.licdn.com/dms/image/C4E03AQGGqZWpjHYUUg/profile-displayphoto-shrink_100_100/0?e=1611187200&v=beta&t=u4bJrf_9e8YsRnlKpcCcApxx-9uNMbGQsDnQvpBKEvg.com/Images/BogoLogo_GLITCH.png' />
				<div className='sidebar__headerRight'>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
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

export default Sidebar
