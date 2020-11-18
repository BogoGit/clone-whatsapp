import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import { Avatar, IconButton } from '@material-ui/core'

const Sidebar = () => {
	return (
		<div class='sidebar'>
			<div className='sidebar__header'>
				<Avatar />
				<div className='sidebar__headerRight'>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
