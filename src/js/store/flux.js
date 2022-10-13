const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			baseURL: "https://www.swapi.tech/api/",
  			baseImgURL:'https://starwars-visualguide.com/assets/img/',
			characters: [],
			favorites: []
		},
		actions: {
			getCharacters: () => {
				fetch(getStore().baseURL + "people")
				  .then((res) => res.json())
				  .then((data) => setStore({characters:data.results}))
				  .catch((error) => console.log(error));
			  },
			addFavorite: (fav) => {
				const newFavorites = getStore().favorites;
				newFavorites.push(fav);
				setStore({favorites: newFavorites});
			}
		}
		}
	};

export default getState;
