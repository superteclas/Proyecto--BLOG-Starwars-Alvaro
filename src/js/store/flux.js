

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: [],
            character: {
                id: null, 
                details: {} 
            },
            planet:{
                id: null, 
                details: {} 
            },
            favorites: []
        },
        actions: {
            
            addItem: item => {
                const store = getStore();
                setStore({ favorites: [...store.favorites, item] }); 
            },

			removeItem: itemName => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(favorite => favorite !== itemName);
                setStore({ favorites: updatedFavorites });
            },

            getAllCharacters: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json())
                    .then(data => setStore({ characters: data.results || [] }))
                    .catch(error => console.log(error));
            },

            getAllPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
                    .then(res => res.json())
                    .then(data => setStore({ planets: data.results || [] }))
                    .catch(error => console.log(error));
            },
            
            getAllVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
                    .then(res => res.json())
                    .then(data => setStore({ vehicles: data.results || [] }))
                    .catch(error => console.log(error));
            },

            getCharacterDetails: (id) => {
                fetch(`https://www.swapi.tech/api/people/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log("Character details:", data.result.properties); 
                        const characterDetails = data.result.properties || {};
                        setStore({
                            character: {
                                id: id,
                                details: characterDetails,
                                gender: characterDetails.gender || '',
                                hairColor: characterDetails.hair_color || '',
                                eyeColor: characterDetails.eye_color || ''
                            }
                        });
                    })
                    .catch(error => console.log(error));
            },

            getPlanetDetails: (id) => {
                fetch(`https://www.swapi.tech/api/planets/${id}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log("planet details:", data.result.properties); 
                        const PlanetDetails = data.result.properties || {};
                        setStore({
                            planet: {
                                id: id,
                                details: PlanetDetails,
                                name: PlanetDetails.name || '',
                                population: PlanetDetails.population || '',
                                climate: PlanetDetails.climate || '',
                                terrain: PlanetDetails.terrain || '',
                                diameter: PlanetDetails.diameter || '',
                                rotarionPeriod: PlanetDetails.rotation_period || ''
                            }
                        });
                    })
                    .catch(error => console.log(error));
            }
            
        }
    };
};

export default getState;
