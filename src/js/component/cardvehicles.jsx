import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardVehicles = ({ vehicles }) => {
    const { store, actions } = useContext(Context);
    const token = localStorage.getItem("token");
    const addHeart = store.favorites.includes(vehicles.name);

    const addFavorites = async () => {
        if (!token) {
            alert("Debes iniciar sesión para agregar a favoritos");
            return;
        }

        actions.favoriteList(vehicles.name);

        try {
            const success = await actions.addFavoriteCharacter(vehicles.id);
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
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} 
                className="card-img-top" 
                alt="..." 
            />
            <div className="card-body">
                <h5 className="card-text">{vehicles.model}</h5>
                <p className="card-text">Model: {vehicles.model}</p>
                <p className="card-text">Vehicle class: {vehicles.vehicle_class}</p>
                <Link to={"/detalles/vehicles/" + vehicles.id}>
                    <button className="btn btn-outline-primary me-6">Learn more!</button>
                </Link>
                <button className="btn btn-outline-primary ms-5" onClick={addFavorites} disabled={!token}>
                    <i className={`fa ${addHeart ? "fa-heart" : "fa-heart-o"}`}></i>
                </button>
            </div>
        </div>
    );
};
