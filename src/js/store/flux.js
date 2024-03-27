// En el archivo getState.js

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [], // Cambiado a 'characters' en lugar de 'people'
            planets: [],
            vehicles: [],
            character: {}
        },
        actions: {
            getAllCharacters: () => {
                fetch("https://www.swapi.tech/api/people")
                    .then(res => res.json())
                    .then(data => setStore({ characters: data.results || [] })) // Cambiado a 'characters'
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
                    .then(data => setStore({ character: data.result.properties || {} }))
                    .catch(error => console.log(error));
            }
        }
    };
};

export default getState;
