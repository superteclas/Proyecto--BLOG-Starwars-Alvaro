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
				fetch("https://glowing-fishstick-7v9q5pjqjqj52wwg5-3000.app.github.dev/people", {
					method: 'GET'
				})
				.then(res => res.json())
				.then(data => setStore({ peoples: data.results }))
				.catch(err => console.error(err));
			},
			getPlanets: () => {
				fetch("https://glowing-fishstick-7v9q5pjqjqj52wwg5-3000.app.github.dev/planets/", {
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
					let response = await fetch('https://glowing-fishstick-7v9q5pjqjqj52wwg5-3000.app.github.dev/login',{
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
			
			signup: async (email, password) => {
				try {
					let response = await fetch('https://glowing-fishstick-7v9q5pjqjqj52wwg5-3000.app.github.dev/signup', {
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
			

		}
	};
};

export default getState;
