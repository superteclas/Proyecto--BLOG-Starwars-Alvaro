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
            <div className="cards-container">
                {store.characters.map((character) => {
                    return (
                        <Card name={character.name} key={character.uid} />
                    );
                })}
            </div>

            <div className="cards-container">
                {store.planets.map((planet) => {
                    return (
                        <Card name={planet.name} key={planet.uid} />
                    );
                })}
            </div>

            <div className="cards-container">
                {store.vehicles.map((vehicles) => {
                    return (
                        <Card name={vehicles.name} key={vehicles.uid} />
                    );
                })}
            </div>
        </div>
    );
};
