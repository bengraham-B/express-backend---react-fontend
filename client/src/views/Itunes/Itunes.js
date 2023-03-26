import React, {useState} from 'react'


class FavObject {
	constructor(index, title, artistName, trackCensoredName, kind, releaseDate, primaryGenreName, country, trackViewUrl){
		this.index = index
		this.title = title
		this.artistName = artistName
		this.trackCensoredName = trackCensoredName
		this.kind = kind
		this.releaseDate = releaseDate
		this.primaryGenreName = primaryGenreName
		this.country = country
		this.trackViewUrl = trackViewUrl
	}
}
export default function Itunes() {
	const [data, setData] = useState()
	const searchItunes = () => {
		const search = document.getElementById("itunes-search").value

		if(document.getElementById("itunes-search").value){
			const searchTerm = search;
			const url = `https://itunes.apple.com/search?term=${searchTerm}`;
	
	
			fetch(url)
				.then(response => response.json()) 
				.then(data => {
				console.log(data.results);

				const resultsArray = []
				for(let i = 0; i < data.results.length; i++){

					resultsArray.push(
						{
							artistName: data.results[i].artistName,
							trackCensoredName: data.results[i].trackCensoredName,
							kind: data.results[i].kind,
							releaseDate: data.results[i].releaseDate,
							primaryGenreName: data.results[i].primaryGenreName,
							country: data.results[i].country,
							trackViewUrl: data.results[i].trackViewUrl
						}
					)

				}
				console.log("--- resultsArray ---", resultsArray)
				setData(resultsArray)
			})
				.catch(error => {
				console.error(error);
			});
		}

		else {
			alert("Please Enter a Value")
		}



	}

	const hanldeFav = (i) => {
		//* Checking if the key in localStorage and if it does not, it will create an empty array as a place holder.
		if(localStorage.getItem("itunes-fav") === null){
			localStorage.setItem("itunes-fav", JSON.stringify([]))
			console.log("Create Empty Local Storage Key: itunes-fav")

			const GET_ARRAY = JSON.parse(localStorage.getItem("itunes-fav"))
			let index = GET_ARRAY.length

			localStorage.setItem("itunes-fav", JSON.stringify(
				new FavObject(
					{
						index: index,
						title: i.trackCensoredName,
						artistName: i.artistName,
						trackCensoredName: i.trackCensoredName,
						kind: i.kind,
						releaseDate: i.releaseDate,
						primaryGenreName: i.primaryGenreName,
						country: i.country,
						trackViewUrl: i.trackViewUrl
					}
				)
			))		
		}
		
		else {
			const GET_ARRAY = JSON.parse(localStorage.getItem("itunes-fav"))
			let index = GET_ARRAY.length

			
			
			
			const addArray = []
			
			
			for(let i = 0; i < GET_ARRAY.length; i++){
				addArray.push(GET_ARRAY[i])
			}

			const favObjectItem = new FavObject(
				{
					index: index,
					title: i.trackCensoredName,
					artistName: i.artistName,
					trackCensoredName: i.trackCensoredName,
					kind: i.kind,
					releaseDate: i.releaseDate,
					primaryGenreName: i.primaryGenreName,
					country: i.country,
					trackViewUrl: i.trackViewUrl
				}
			)
			
			
			addArray.push(favObjectItem)
				
			localStorage.setItem("itunes-fav", JSON.stringify(addArray))
			console.log("Length:", GET_ARRAY.length)
		}


	}
	return (
		<div id="ITUNES">

			<div className="title-container">
				<h1 className="title">Search Itunes</h1>
			</div>

			<div className="search-bar-container">
				<div className="search-bar">
					<input type="text" id="itunes-search" />
					<button onClick={searchItunes}>Search</button>
				</div>
			</div>

			<div className="display-results">
				{
					!data ? "Search Found Nothing!": data.map((name, i) => {
						return (
							<div key={i} className="results-component">

								<div className="index-number">
									<p>{i}</p>
								</div>

								<div className="compoenent">
									<p className="title">{name.trackCensoredName}</p>
									<p>Name: {name.artistName}</p>
									<p>Track Name: {name.trackCensoredName}</p>
									<p>Kind: {name.kind}</p>
									<p>Release Date: {name.releaseDate}</p>
									<p>Genre: {name.primaryGenreName}</p>
									<p>Country: {name.country}</p>
									<p>Url: <a href={name.trackViewUrl}>{name.trackViewUrl}</a></p>
								</div>

								<div className="button-container">
									<button onClick={() => {hanldeFav(name)}}>FAV</button>
								</div>

							</div>
						)
					})
				}

			</div>

		</div>
	)
}
