import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card = ({ id, name, }) => {
    const { store, actions } = useContext(Context);
    const { character } = store;
    const [isFavorite, setIsFavorite] = useState(false); 

    useEffect(() => {
        if (id) {
            actions.getCharacterDetails(id,);
        }
    }, [id]);

    const handleAddToFavorites = () => {
        actions.addItem(name);
        setIsFavorite(true); 
    };
    console.log("buscando que dibuje el genero" + character.skinColor);
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Genero: {character.gender}</p>
                
                <p className="card-text">Color de Piel: {character.skinColor}</p>
                <p className="card-text">Color de Ojos: {character.eyeColor}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/single/${id}`} className="btn btn-custom">Más info</Link>
                    <button className="btn btn-warning" onClick={handleAddToFavorites}>
                        <i className="fa fa-heart" style={{ color: isFavorite ? 'red' : 'white' }}></i>
                    </button>
                </div>
            </div>
        </div>
        
    );
};

Card.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
};

export default Card;
