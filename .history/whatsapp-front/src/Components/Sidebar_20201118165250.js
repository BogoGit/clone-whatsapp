import React from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'

const Sidebar = () => {
	return (
		<div class='sidebar'>
			<div className='sidebar__header'>
				<div className='sidebar__headerRight'>
					<IconButton>
						<DonutLargeIcon />
					</IconButton>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
