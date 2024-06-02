const getState = ({ getStore, getActions, setStore }) => {
    const apiUrl = "https://swapi.tech/api/";
    const backendUrl = "https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev";

    const getUserId = () => {
        return localStorage.getItem("user_id");
    };

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
                    .then(response => response.json())
                    .then(data => {
                        setStore({ characters: data.results });
                    })
                    .catch(error => console.log(error));
            },
            getPlanets: () => {
                fetch(apiUrl + "planets")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ planets: data.results });
                    })
                    .catch(error => console.log(error));
            },
            getVehicles: () => {
                fetch(apiUrl + "vehicles")
                    .then(response => response.json())
                    .then(data => {
                        setStore({ vehicles: data.results });
                    })
                    .catch(error => console.log(error));
            },
            getDetails: (category, uid) => {
                fetch(`https://swapi.tech/api/${category}/${uid}`)
                    .then(response => response.json())
                    .then(data =>
                        setStore({
                            details: {
                                ...data.result.properties,
                                description: data.result.description,
                            },
                        })
                    )
                    .catch(error => console.log(error));
            },
            login: async (email, password) => {
                try {
                    const response = await fetch(`${backendUrl}/login`, {
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
                        console.log(data.access_token);
                        localStorage.setItem("user_id", data.user_id); 
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
                localStorage.removeItem("user_id");
                setStore({ favorites: [[], [], []] });
            },
            favorites: async () => {
                const token = localStorage.getItem("token");
                const user_id = getUserId(); // Obtener el user_id del localStorage

                try {
                    const response = await fetch(`${backendUrl}/user/${user_id}/favorites`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    });

                    if (response.status === 200) {
                        const data = await response.json();
                        const results = data.results;
                        setStore({
                            favorites: [results.characters, results.planets, results.vehicles],
                        });
                    } else {
                        setStore({ favorites: [[], [], []] });
                    }
                } catch (error) {
                    setStore({ favorites: [[], [], []] });
                }
            },
            addFavorite: async (type, id) => {
                const token = localStorage.getItem("token");
                const userId = getUserId();
                const endpoint = `${backendUrl}/user/${userId}/favorites`;

                try {
                    const response = await fetch(endpoint, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                        body: JSON.stringify({ type, id }),
                    });

                    if (!response.ok) {
                        throw new Error("Error adding favorite");
                    }

                    const data = await response.json();
                    return data.msg;
                } catch (error) {
                    console.error("Error adding favorite:", error);
                }
            },

            removeFavorite: async (type, id) => {
                const token = localStorage.getItem("token");
                const userId = getUserId();
                const endpoint = `${backendUrl}/user/${userId}/favorites/${type}/${id}`;

                try {
                    const response = await fetch(endpoint, {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + token,
                        },
                    });

                    if (!response.ok) {
                        throw new Error("Error removing favorite");
                    }

                    const data = await response.json();
                    return data.msg;
                } catch (error) {
                    console.error("Error removing favorite:", error);
                }
            },

            signup: async (email, password) => {
                try {
                    const response = await fetch(`${backendUrl}/signup`, {
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
                        localStorage.setItem("user_id", data.user_id); // Almacenar user_id
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
