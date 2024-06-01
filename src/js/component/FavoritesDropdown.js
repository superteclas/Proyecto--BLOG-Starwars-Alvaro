import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const FavoritesDropdown = () => {
    const { actions } = useContext(Context);
    const [favorites, setFavorites] = useState([[], [], []]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [[], [], []];
        setFavorites(storedFavorites);
    }, []);

    const removeFavorite = async (indexCat, uid) => {
        try {
            const newFavorites = [...favorites];
            newFavorites[indexCat] = newFavorites[indexCat].filter(item => item.uid !== uid);
            localStorage.setItem("favorites", JSON.stringify(newFavorites));
            setFavorites(newFavorites);
            await actions.favorites();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="nav dropdown me-5">
            <a className="d-flex nav-link dropdown-toggle text-white bg-primary rounded align-items-center" href="#" role="button" data-bs-toggle="dropdown">
                Favorites
                <span className="bg-secondary px-2 ms-1" style={{ borderRadius: "30px" }}>
                    {favorites[0].length + favorites[1].length + favorites[2].length}
                </span>
            </a>
            <ul className="dropdown-menu">
                {favorites[0].length === 0 && favorites[1].length === 0 && favorites[2].length === 0
                    ? <li className="text-center">(empty)</li>
                    : favorites.flat().map((item, index) => (
                        <li key={index} className="d-flex justify-content-between text-primary">
                            {item.name}
                            <button onClick={() => removeFavorite(index, item.uid)} className="btn p-0 px-1">
                                <i className="fas fa-trash"></i>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FavoritesDropdown;
