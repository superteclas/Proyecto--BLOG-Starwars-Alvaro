const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peoples: [],
			planets: [],
			vehicles: [],
			info: []
		},
		actions: {
			
	
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/", {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => setStore({ peoples: data.results }))
				.catch(err => console.error(err));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/", {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => setStore({ planets: data.results }))
				.catch(err => console.error(err));
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/", {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => setStore({ vehicles: data.results }))
				.catch(err => console.error(err));
			},
			getInfo: (type, id) => {
				const requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				fetch(`https://www.swapi.tech/api/${type}/` + id, requestOptions)
				.then((response) => response.json())
				.then((result) => setStore({ info: result.result }))
				.catch((error) => console.error(error));
			},
			addFavorite: (favorite) => {
				const store = getStore();
				const newArray = store.favorites.concat(favorite);
				setStore({ favorites: newArray });
			},
			deleteFavorite: (name) => {
				const arrayfiltered = getStore().favorites.filter((item, index) => item !== name);
				setStore({ favorites: arrayfiltered });
			},
			favoriteList: (name) => {
				const listNames = getStore().favorites;
				if (listNames.length === 0) {
					getActions().addFavorite(name);
				} else {
					if (listNames.includes(name)) {
						getActions().deleteFavorite(name);
					} else {
						getActions().addFavorite(name);
					}
				}
			},
			login: async (email, password) => {
				try{
					let response = await fetch('http://127.0.0.1:3000/login',{
						method: "POST",
						headers:{
							"Content-Type":"application/json" 
						},
						body: JSON.stringify({
							email:email,
							password:password
						})
					})
					let data = await response.json()
					console.log(email);
					if (response.status === 200){
						console.log("holaaaaa" + data.access_token);
						localStorage.setItem("token", data.access_token);

						console.log(data);
						return true;
					}else{
						return false;
					}

					}catch(error){
						console.log(error);
						return false;	
				}
			},

		}
	};
};

export default getState;
