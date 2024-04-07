import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardVehicles = ({ id, name }) => {
    const { store, actions } = useContext(Context);
    const { vehicle } = store;
    const [isFavorite, setIsFavorite] = useState(false); 

    useEffect(() => {
        if (id) {
            actions.getVehicleDetails(id);
        }
    }, [id]);

    const handleAddToFavorites = () => {
        actions.addItem(name);
        setIsFavorite(true); 
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
               
                <p className="card-text">Tripulacion: {vehicle.crew}</p>
                <p className="card-text">Modelo: { vehicle.model}</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/singlev/${id}`} className="btn btn-custom">Más info</Link>
                    <button className="btn btn-warning" onClick={handleAddToFavorites}>
                        <i className="fa fa-heart" style={{ color: isFavorite ? 'red' : 'white' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

CardVehicles.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    
};

export default CardVehicles;
