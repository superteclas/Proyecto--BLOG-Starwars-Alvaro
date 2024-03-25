const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [] 
        },
        actions: {
            getAllCharacters: () => {
                fetch("https://www.swapi.tech/api/people")
				
                    .then(res => res.json())
                    .then(data => setStore({ characters: data.results || [] })) 
					
                    .catch(error => console.log(error));
					
            }
			
        }
    };
};

export default getState;
