import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {

	const [backendData, setBackendData] = useState([{}])

	useEffect(() => {
		fetch("/api")
			.then(response => response.json())
			.then(data => setBackendData(data))
	},[])

  	return (
    	<div className='server-data-container'>
			<h3 className='h3'>Web Projects</h3>
			{
				typeof backendData.webProjects === "undefined"

				?

				<p>Loading...</p>

				:

				backendData.webProjects.map( (project, i) => {
					return (

						<p key={i} className='server-data'>Web Project: {project}</p>
					)
				})
			}
		</div>
  	)
}
