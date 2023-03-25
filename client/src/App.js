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
			{backendData.users}
		</div>
  	)
}
