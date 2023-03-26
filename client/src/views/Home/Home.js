import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

export default function Home() {

	return (
		<div id='HOME'>

			<div className="container">
				<div className="text">
					This allows you to search on Itunes and Apple Books using their API.
				</div>

				<div className="buttons">
					{/* //^ Links to the itunes and books search pages */}
					<Link className="bn" to="/books">
						<button className="btn">Books</button>
					</Link>
					
					<Link className="bn" to="/itunes">
						<button className="btn">Itunes</button>
					</Link>
					
				</div>
			</div>

		</div>
	)
}
