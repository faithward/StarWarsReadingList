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
          for (let i = 0; i < newFavorites.length; i++){
            if (newFavorites[i].name == fav.name){
              return ''
            }
          }
          newFavorites.push(fav);
          setStore({ favorites: newFavorites });
      },
      getSingle: (singleUrl) => {
        fetch(singleUrl)
          .then((res) => res.json())
          .then((data) => setStore({ singleEntry: data.result }))
          .catch((error) => console.log(error));
      },
      deleteFavorite: (fav) => {
        const tempArr = getStore().favorites
        const newArr = tempArr.filter((item, index) => index != fav)
        console.log(newArr)
        setStore({ favorites: newArr });
      }
    },
  };
};

export default getState;
