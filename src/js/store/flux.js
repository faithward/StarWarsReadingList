const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      baseURL: "https://www.swapi.tech/api/",
      baseImgURL: "https://starwars-visualguide.com/assets/img/",
      characters: [],
      planets: [],
      favorites: [],
      singleEntry: {},
    },
    actions: {
      getCharacters: () => {
        fetch(getStore().baseURL + "people")
          .then((res) => res.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((error) => console.log(error));
      },
      getPlanets: () => {
        fetch(getStore().baseURL + "planets")
          .then((res) => res.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((error) => console.log(error));
      },
      addFavorite: (fav) => {
        const newFavorites = getStore().favorites;
        newFavorites.push(fav);
        setStore({ favorites: newFavorites });
      },
      getSingle: (singleUrl) => {
        fetch(singleUrl)
          .then((res) => res.json())
          .then((data) => setStore({ singleEntry: data.result }))
          .catch((error) => console.log(error));
      },
	  deleteFavorite: (favIndex) => {
		const editList = favorites.splice(favIndex, 1);
		setStore({ favorites: editList });
	  }
    },
  };
};

export default getState;
