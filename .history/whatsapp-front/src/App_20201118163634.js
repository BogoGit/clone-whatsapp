import React from 'react'
import './App.css'
import Sidebar from './Components/Sidebar'
import Chat from './Components/Chat'

function App() {
	return (
		<div className='app'>
			<Sidebar />
			<Sidebar />
			<Sidebar />
			<Chat />
		</div>
	)
}

export default App
