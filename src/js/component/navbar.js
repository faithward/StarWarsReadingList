import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context);
  const history = useHistory()
  console.log(store.favorites)
  return (
    <nav className="navbar navbar-light bg-light mb-3 p-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Star Wars Database</span>
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-warning dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
			{store.favorites.map((favorite, index) => {
				return(
					<li key={index} className='d-flex justify-content-between'>
              <p className="dropdown-item">
                {favorite.name}
              </p>
            <button className="btn btn-danger" onClick={() => {
              actions.deleteFavorite({favorite})
            }}><i className="fas fa-trash"></i></button>
          </li>
				)
			})}
          </ul>
        </div>
      </div>
    </nav>
  );
};
