import React from 'react'

export default function FavComponent(props) {
	return (
		<div id="FAV_COMPONENT">
			<div className="body">

				<div className="index-wrapper">
					<p>{props.i}</p>
				</div>

				<div className="details-wrapper">

					<div className="title-wrapper">
						<h5>{props.title}</h5>
					</div>

					<div className="details">
						<h4>Aritst: {props.artistName}</h4>
						<h4>Censerod Name: {props.trackCensoredName}</h4>
						<h4>Kind: {props.kind}</h4>
						<h4>Release Date: {props.releaseDate}</h4>
						<h4>Genre: {props.primaryGenreName}</h4>
						<h4>Country: {props.country}</h4>
						<h4>Ur: {props.trackViewUrl}</h4>
					</div>

				</div>
			</div>



			
		
		</div>
	)
}
