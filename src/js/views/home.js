import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext(Context);

  return (
    <>
      <h1>Characters</h1>
      <div className="card-group">
		{store.characters.map((character) => {
			return(
			        <div className="card" key={character.uid}>
					<img src={store.baseImgURL + 'characters/' + character.uid + '.jpg'} className="card-img-top" alt="..." />
					<div className="card-body">
					  <h5 className="card-title">{character.name}</h5>
					</div>
					<div className="d-flex justify-content-between">
						<Link to='single'>
							<button className="btn btn-primary">Learn More</button>
						</Link>
						<button className="btn btn-warning" onClick={() => {
							actions.addFavorite(character)
						}}><i className="far fa-heart"></i></button>
					</div>
				  </div>
			)
		})}
      </div>
	  <h1>Planets</h1>
      <div className="card-group">
		{store.planets.map((planet) => {
			return(
			        <div className="card" key={planet.uid}>
					<img src={store.baseImgURL + 'planets/' + planet.uid + '.jpg'} className="card-img-top" alt="..." />
					<div className="card-body">
					  <h5 className="card-title">{planet.name}</h5>
					</div>
					<div className="d-flex justify-content-between">
						<button className="btn btn-primary">Learn More</button>
						<button className="btn btn-warning" onClick={() => {
							actions.addFavorite(planet)
						}}><i className="far fa-heart"></i></button>
					</div>
				  </div>
			)
		})}
      </div>
    </>
	
  );
};
