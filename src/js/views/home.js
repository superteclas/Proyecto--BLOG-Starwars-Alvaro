// En el archivo Home.js

import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js"; // Asegúrate de que la ruta de importación sea correcta
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters();
    }, []);

    return (
        <div>
            <div className="cards-section">
                <h2>Characters</h2>
                <div className="cards-container">
                    {store.characters.map((character) => (
                        <Card
                            name={character.name}
                            gender={character.gender}
                            key={character.uid}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
