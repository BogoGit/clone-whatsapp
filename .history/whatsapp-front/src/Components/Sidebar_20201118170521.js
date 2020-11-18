import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Avatar, IconButton, SearchedOutline } from '@material-ui/core'

const Sidebar = () => {
	return (
		<div class='sidebar'>
			<div className='sidebar__header'>
				<Avatar src='https://media-exp1.licdn.com/dms/image/C4E03AQGGqZWpjHYUUg/profile-displayphoto-shrink_400_400/0?e=1611187200&v=beta&t=y6jr13vae_pl2v3V5tMdfqomm_dYtnKT4jKiYVt33hw' />
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

			<div className='sidebar__search'>
				<div className='sidebar__searchContainer'>
					<SearchedOutline />
				</div>
			</div>
		</div>
	)
}

export default Sidebar
