import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
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
                            id={character.uid} // Pasar la ID del personaje como una propiedad
                            key={character.uid}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
