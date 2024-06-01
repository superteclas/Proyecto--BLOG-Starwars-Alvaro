import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Vistaprivada = () => {
    const { store, actions } = useContext(Context);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [[], [], []];
        setFavorites(storedFavorites);
    }, []);

    const removeFavorite = async (indexCat, uid) => {
        try {
            await actions.removeFav(indexCat === 0 ? "people" : indexCat === 1 ? "planets" : "vehicles", uid);
            await actions.favorites();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Tus favoritos</h2>
            <ul className="list-group">
                {favorites.length === 0 ? (
                    <p>No favorites yet</p>
                ) : (
                    favorites.flat().map((favorite, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{favorite.name}</span>
                           
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};
