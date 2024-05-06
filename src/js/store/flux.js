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
				fetch("https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/people", {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => setStore({ peoples: data.results }))
				.catch(err => console.error(err));
			},
			getPlanets: () => {
				fetch("https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/planets", {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => setStore({ planets: data.results }))
				.catch(err => console.error(err));
			},
			getVehicles: () => {
				fetch("https://glowing-fishstick-7v9q5pjqjqj52wwg5-3000.app.github.dev/vehicles", {
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
			addFavorite:(name)=> {
				setStore({favorites:getStore().favorites.concat(name)})
				console.log(getStore().favorites);
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
					let response = await fetch('https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/login',{
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
						console.log("holaaaaa" + " " + data.access_token);
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
			
			signup: async (email, password) => {
				try {
					let response = await fetch('https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/signup', {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: email,
							password: password
						})
					});
			
					let data = await response.json();
			
					if (response.ok) {
						console.log("Signup successful");
						localStorage.setItem("token", data.access_token);
						return true;
					} else {
						console.log("Signup failed:", data.msg);
						// Puedes manejar el mensaje de error de acuerdo a tus necesidades, por ejemplo, mostrando un mensaje al usuario
						return false;
					}
				} catch (error) {
					console.log("Error during signup:", error);
					return false;
				}
			},

			getFavorites: async () => {
				let token = localStorage.getItem("token");
				try {
					let response = await fetch(`https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/users/favorites`, {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						},
					});
					let data = await response.json();
			
					if (response.ok) {
						// Devolver solo los resultados en lugar de todo el objeto de respuesta
						return data.results;
					} else {
						console.error("Error fetching favorites:", data.msg || response.statusText);
						return []; // Devolver una matriz vacía si hay un error
					}
				} catch (error) {
					console.error("Error fetching favorites:", error);
					return []; // Devolver una matriz vacía si hay un error
				}
			},
			
			
			addFavoriteCharacter: async () => {
				let token = localStorage.getItem("token")
				try{
					let response = await fetch(`https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/favorite/people/${id}`,{
						method: "POST",
						headers:{
							"Content-Type":"application/json",
							"Authorization":"Bearer "+token
						},
					})
					let data = await response.json()
					
					if (response.status === 200){
						console.log("Flux" + " " + data);
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
