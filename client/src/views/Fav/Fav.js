import React, {useState, useEffect} from 'react'

import FavComponent from './FavComponent/FavComponent'

export default function Fav() {

	const [displayItunesFav, setDisplayItunesFav] = useState()
	const [displayBooksFav, setDisplayBooksFav] = useState()

	useEffect(() =>{

		if(localStorage.getItem("itunes-fav") === null){
			localStorage.setItem("itunes-fav", JSON.stringify([]))
			const GET_ARRAY = JSON.parse(localStorage.getItem("itunes-fav"))
			console.log(GET_ARRAY)
			setDisplayItunesFav("No Favourtied Items From Itunes")
	
		}
	
		else {
			const GET_ARRAY = JSON.parse(localStorage.getItem("itunes-fav"))
			// setDisplayItunesFav("yes")

			setDisplayItunesFav(
				GET_ARRAY.map((item, i) => {
					return(
						<FavComponent 
							i={i} 
							title={item.index.title}
							trackCensoredName={item.index.trackCensoredName}
							artistName={item.index.artistName}
							kind={item.index.kind}
							releaseDate={item.index.releaseDate}
							primaryGenreName={item.index.primaryGenreName}
							country={item.index.country}
							trackViewUrl={item.index.trackViewUrl}
						/>
	
					)
				})
	
			)
	
		}
	},[])
	
	useEffect(() =>{

		if(localStorage.getItem("books-fav") === null){
			localStorage.setItem("books-fav", JSON.stringify([]))
			const GET_ARRAY = JSON.parse(localStorage.getItem("books-fav"))
			console.log(GET_ARRAY)
			setDisplayBooksFav("No Favourtied Items From books")
	
		}
	
		else {
			const GET_ARRAY = JSON.parse(localStorage.getItem("books-fav"))

			setDisplayBooksFav(
				GET_ARRAY.map((item, i) => {
					return(
						<FavComponent 
							i={i} 
							title={item.index.title}
							trackCensoredName={item.index.trackCensoredName}
							artistName={item.index.artistName}
							kind={item.index.kind}
							releaseDate={item.index.releaseDate}
							primaryGenreName={item.index.primaryGenreName}
							country={item.index.country}
							trackViewUrl={item.index.trackViewUrl}
						/>
	
					)
				})
	
			)
	
		}
	},[])


		
			
	


	return (
		<div id="FAV">
			<section className="title">
				<h3>Favourites</h3>
			</section>

			<section className="column-wrapper">

				<div className="fav-wrapper itunes">
					<div className="title">
						<h4>Itunes</h4>
					</div>
						<div className="comp-container">
							{displayItunesFav}
						</div>

				</div>

				<div className="fav-wrapper books">
					<div className="title">
						<h4>Books</h4>
					</div>
						<div className="comp-container">
							{displayBooksFav}
						</div>
				</div>
			</section>



		</div>
	)
}
