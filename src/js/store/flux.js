const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            favorites: [],
            peoples: [],
            planets: [],
            vehicles: [],
            info: [],
            isLoggedIn: !!localStorage.getItem("token") // Añadido estado de autenticación
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
                fetch(`https://www.swapi.tech/api/${type}/${id}`, {
                    method: 'GET'
                })
                .then(res => res.json())
                .then(data => setStore({ info: data.result }))
                .catch(err => console.error(err));
            },
            addFavorite: (favorite) => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, favorite] });
            },
            deleteFavorite: (name) => {
                const store = getStore();
                setStore({ favorites: store.favorites.filter(item => item !== name) });
            },
            favoriteList: (name) => {
                const store = getStore();
                if (store.favorites.includes(name)) {
                    getActions().deleteFavorite(name);
                } else {
                    getActions().addFavorite(name);
                }
            },
            login: async (email, password) => {
                try {
                    let response = await fetch('https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/login', {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ email, password })
                    });
                    let data = await response.json();
                    if (response.ok) {
                        localStorage.setItem("token", data.access_token);
                        setStore({ isLoggedIn: true }); // Actualizar el estado de autenticación
                        return true;
                    } else {
                        console.log("Login failed:", data.msg);
                        return false;
                    }
                } catch (error) {
                    console.error("Login error:", error);
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
                        body: JSON.stringify({ email, password })
                    });
                    let data = await response.json();
                    if (response.ok) {
                        localStorage.setItem("token", data.access_token);
                        setStore({ isLoggedIn: true }); // Actualizar el estado de autenticación
                        return true;
                    } else {
                        console.log("Signup failed:", data.msg);
                        return false;
                    }
                } catch (error) {
                    console.error("Signup error:", error);
                    return false;
                }
            },
            getFavorites: async () => {
                let token = localStorage.getItem("token");
                try {
                    let response = await fetch('https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/users/favorites', {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token
                        }
                    });
                    let data = await response.json();
                    if (response.ok) {
                        return data.results;
                    } else {
                        console.error("Error fetching favorites:", data.msg);
                        return [];
                    }
                } catch (error) {
                    console.error("Error fetching favorites:", error);
                    return [];
                }
            },
            addFavoriteCharacter: async (id) => {
                let token = localStorage.getItem("token");
                try {
                    let response = await fetch(`https://bug-free-space-garbanzo-5gq6rx76jqpwh4w67-3000.app.github.dev/favorite/people/${id}`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token
                        }
                    });
                    let data = await response.json();
                    if (response.ok) {
                        return true;
                    } else {
                        console.log("Add favorite character failed:", data.msg);
                        return false;
                    }
                } catch (error) {
                    console.error("Error adding favorite character:", error);
                    return false;
                }
            },
            logOut: () => {
                localStorage.removeItem("token");
                setStore({ favorites: [], isLoggedIn: false }); // Actualizar el estado de autenticación y limpiar favoritos
            }
        }
    };
};

export default getState;
