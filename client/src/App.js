import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import './styles/styles.css';


//^ Importing Views
import Home from './views/Home/Home';
import Itunes from './views/Itunes/Itunes';
import Books from './views/Books/Books';
import Fav from './views/Fav/Fav';


export default function App() {
	console.log("Working")

	// const [backendData, setBackendData] = useState([{}])
	
	const searchTerm = "jack johnson";
	const url = `https://itunes.apple.com/search?term=${searchTerm}`;

	
	useEffect(() => {
		//& Itunes
		fetch(url)
			.then(response => response.json()) // parse the response as JSON
			.then(data => {
			// console.log(data.results[0].longDescription); // do something with the data
		})
			.catch(error => {
			// console.error(error); // handle any errors
		});

		const searchTerm = "Harry Potter";
		const urlbook = `https://itunes.apple.com/search?term=${searchTerm}&entity=ebook`;

		//? Apple Books
		fetch(urlbook)
		.then(response => response.json()) // parse the response as JSON
		.then(data => {
			console.log(data.results[0].trackName); // do something with the data
		})
		.catch(error => {
			console.error(error); // handle any errors
		});
	},[])

  	return (
    	<div className='server-data-container'>
			<header id="HEADER">
				<div className="title-section">
					<div className="title">Express API Search</div>
				</div>

				<div className="link-section">
					<Link to="/" className="links">Home</Link>
					<Link to="/itunes" className='links'>Itunes</Link>
					<Link to="/books" className='links'>Books</Link>
					<Link to="/fav" className='links'>Favourties</Link>
				</div>
			</header>
			<Routes>
				<Route exact path="/" element={<Home/>}/>
				<Route path="/itunes" element={<Itunes/>}/>
				<Route path="/books" element={<Books/>}/>
				<Route path="/fav" element={<Fav/>}/>
			</Routes>
		</div>
  	)
}
