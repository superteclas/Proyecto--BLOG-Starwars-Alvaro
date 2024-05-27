import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardPlanets = ({ planets }) => {
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem("token");
    const addHeart = store.favorites.includes(planets.name);

    const addFavorites = async () => {
        if (!token) {
            alert("Debes iniciar sesión para agregar a favoritos");
            return;
        }

        actions.favoriteList(planets.name);

        try {
            const success = await actions.addFavoriteCharacter(planets.id);
            if (success) {
                console.log("Favorito agregado correctamente");
            } else {
                console.log("Error al agregar el favorito");
            }
        } catch (error) {
            console.error("Error al agregar el favorito:", error);
        }
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img 
                src={planets.id === 1 
                    ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357" 
                    : `https://starwars-visualguide.com/assets/img/planets/${planets.id}.jpg`} 
                className="card-img-top" 
                alt="image" 
            />
            <div className="card-body">
                <h5 className="card-text">{planets.name}</h5>
                <p className="card-text">Population: {planets.population}</p>
                <p className="card-text">Terrain: {planets.terrain}</p>
                <Link to={"/detalles/planets/" + planets.id}>
                    <button className="btn btn-outline-primary me-6">Learn more!</button>
                </Link>
                <button className="btn btn-outline-primary ms-5" onClick={addFavorites} disabled={!token}>
                    <i className={`fa ${addHeart ? "fa-heart" : "fa-heart-o"}`}></i>
                </button>
            </div>
        </div>
    );
};
