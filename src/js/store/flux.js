// En el archivo getState.js

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: [],
            character: {
                id: null, // Agregar una clave para almacenar la ID del personaje seleccionado
                details: {} // Agregar una clave para almacenar los detalles del personaje seleccionado
            }
        },
        actions: {
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
                    .then(data => setStore({ 
                        character: {
                            id: id, // Almacenar la ID del personaje seleccionado
                            details: data.result.properties || {} // Almacenar los detalles del personaje seleccionado
                        }
                    }))
                    .catch(error => console.log(error));
            }
        }
    };
};

export default getState;
