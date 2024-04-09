import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanetas = ({ id, name, removeFromFavorites }) => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;
    const [isFavorite, setIsFavorite] = useState(favorites.includes(name));

    const handleAddToFavorites = () => {
        actions.addItem(name);
        setIsFavorite(true); 
    };

    useEffect(() => {
        setIsFavorite(favorites.includes(name));
    }, [favorites, name]);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Habitantes: {store.planet.population}</p>
                <p className="card-text">Superficie: {store.planet.terrain}</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/singlep/${id}`} className="btn btn-custom">Más info</Link>
                    <button className="btn btn-warning" onClick={isFavorite ? removeFromFavorites : handleAddToFavorites}>
                        <i className="fa fa-heart" style={{ color: isFavorite ? 'red' : 'white' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

CardPlanetas.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    removeFromFavorites: PropTypes.func
};

export default CardPlanetas;
