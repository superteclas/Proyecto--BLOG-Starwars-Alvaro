const getState = ({ getStore, getActions, setStore }) => {
	let apiUrl = "https://swapi.tech/api/";
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			details: {},
			favorites: [[], [], []],
		},
		actions: {
			getCharacters: () => {
				fetch(apiUrl + "people")
					.then((response) => response.json())
					.then((data) => {
						setStore({ characters: data.results });
					})
					.catch((error) => console.log(error));
			},
			getPlanets: () => {
				fetch(apiUrl + "planets")
					.then((response) => response.json())
					.then((data) => {
						setStore({ planets: data.results });
					})
					.catch((error) => console.log(error));
			},
			getVehicles: () => {
				fetch(apiUrl + "vehicles")
					.then((response) => response.json())
					.then((data) => {
						setStore({ vehicles: data.results });
					})
					.catch((error) => console.log(error));
			},
			getDetails: (category, uid) => {
				fetch(`https://swapi.tech/api/${category}/${uid}`)
					.then((response) => response.json())
					.then((data) =>
						setStore({
							details: {
								...data.result.properties,
								description: data.result.description,
							},
						})
					)
					.catch((error) => console.log(error));
			},
			login: async (email, password) => {
				try {
					const response = await fetch("https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/login", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: email,
							password: password,
						}),
					});
					if (response.status === 200) {
						const data = await response.json();
						localStorage.setItem("token", data.access_token);
						getActions().favorites();
						return true;
					} else {
						return false;
					}
				} catch (error) {
					return false;
				}
			},
			logOut: () => {
				localStorage.removeItem("token");
				setStore({ favorites: [[], [], []] });
			},
			favorites: async () => {
				const token = localStorage.getItem("token");
				try {
					const response = await fetch("https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/users/favorites", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + token,
						},
					});
					if (response.status === 200) {
						const data = await response.json();
						const { characters, planets, vehicles } = getStore();
						const backendCharacters = data.results.characters || [];
						const backendPlanets = data.results.planets || [];
						const backendVehicles = data.results.vehicles || [];

						const filteredCharacters = characters.filter((character) =>
							backendCharacters.includes(character.uid)
						);
						const filteredPlanets = planets.filter((planet) =>
							backendPlanets.includes(planet.uid)
						);
						const filteredVehicles = vehicles.filter((vehicle) =>
							backendVehicles.includes(vehicle.uid)
						);

						setStore({
							favorites: [filteredCharacters, filteredPlanets, filteredVehicles],
						});
					} else {
						return [[], [], []];
					}
				} catch (error) {
					return [[], [], []];
				}
			},
			addFav: async (category, uid) => {
				const token = localStorage.getItem("token");
				try {
					const response = await fetch(`https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/${category}/${uid}`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + token,
						},
					});
					if (response.status === 201) {
						const store = getStore();
						let newFavorites = [...store.favorites];
						let allItems = store[category];
						let newItem = allItems.find((item) => item.uid === uid);

						if (category === "people") {
							newFavorites[0].push(newItem);
						} else if (category === "planets") {
							newFavorites[1].push(newItem);
						} else if (category === "vehicles") {
							newFavorites[2].push(newItem);
						}

						setStore({ favorites: newFavorites });
					} else {
						return [];
					}
				} catch (error) {
					return [];
				}
			},
			removeFav: async (category, uid) => {
				const token = localStorage.getItem("token");
				try {
					const response = await fetch(`https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/favorite/${category}/${uid}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + token,
						},
					});
					if (response.status === 200) {
						const store = getStore();
						let newFavorites = [...store.favorites];

						if (category === "people") {
							newFavorites[0] = newFavorites[0].filter((item) => item.uid !== uid);
						} else if (category === "planets") {
							newFavorites[1] = newFavorites[1].filter((item) => item.uid !== uid);
						} else if (category === "vehicles") {
							newFavorites[2] = newFavorites[2].filter((item) => item.uid !== uid);
						}

						setStore({ favorites: newFavorites });
					}
				} catch (error) {
					return [];
				}
			},
			signup: async (email, password) => {
				try {
					const response = await fetch("https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/signup", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							email: email,
							password: password,
						}),
					});
					if (response.status === 201) {
						const data = await response.json();
						localStorage.setItem("token", data.access_token);
						getActions().favorites();
						return true;
					} else {
						return false;
					}
				} catch (error) {
					return false;
				}
			},
		},
	};
};

export default getState;
