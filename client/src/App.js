import React, { useState, useEffect } from 'react'

export default function App() {

	const [backendData, setBackendData] = useState([{}])

	useEffect(() => {
		fetch("/api")
			.then(response => response.json())
			.then(data => setBackendData(data))
	},[])

  	return (
    	<div>
			{
				typeof backendData.users === "undefined"

				?

				<p>Loading...</p>

				:

				backendData.users.map( (user, i) => {
					return (

						<p key={i}>{user}</p>
					)
				})
			}
		</div>
  	)
}
