import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters();
        actions.getAllPlanets();
        actions.getAllVehicles();
    }, []);

    return (
        <div>
            <div className="cards-section">
                <h2>Characters</h2>
                <div className="cards-container">
                    {store.characters.map((character) => (
                        <Card name={character.name} key={character.uid} />
                    ))}
                </div>
            </div>

            <div className="cards-section">
                <h2>Planets</h2>
                <div className="cards-container">
                    {store.planets.map((planet) => (
                        <Card name={planet.name} key={planet.uid} />
                    ))}
                </div>
            </div>

            <div className="cards-section">
                <h2>Vehicles</h2>
                <div className="cards-container">
                    {store.vehicles.map((vehicle) => (
                        <Card name={vehicle.name} key={vehicle.uid} />
                    ))}
                </div>
            </div>
        </div>
    );
};
