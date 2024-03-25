const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [], 
			planets:[],
			vehicles:[]
        },
        actions: {
            getAllCharacters: () => {
                fetch("https://www.swapi.tech/api/people")
				
                    .then(res => res.json())
                    .then(data => setStore({ characters: data.results || [] })) 
					//console.log();
                    .catch(error => console.log(error));
					
            },

			getAllPlanets: () => {
                fetch("https://www.swapi.tech/api/planets/")
				
                    .then(res => res.json())
                    .then(data => setStore({ planets: data.results || [] })) 
					//console.log();
                    .catch(error => console.log(error));
					
            },
			
			getAllVehicles: () => {
                fetch("https://www.swapi.tech/api/vehicles/")
				
                    .then(res => res.json())
                    .then(data => setStore({ vehicles: data.results || [] })) 
					//console.log();
                    .catch(error => console.log(error));
					
            }
        }
    };
};

export default getState;
