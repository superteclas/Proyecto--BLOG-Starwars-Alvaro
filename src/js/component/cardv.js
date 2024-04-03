import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardVehicles = (props) => {
    const { store, actions } = useContext(Context);
    const { vehicle } = store;
    const [isFavorite, setIsFavorite] = useState(false); // Estado local para controlar si el vehículo es favorito o no

    useEffect(() => {
        if (props.id) {
            actions.getVehicleDetails(props.id);
        }
    }, [props.id]);

    const handleAddToFavorites = () => {
        actions.addItem(props.name);
        setIsFavorite(true); // Cuando se hace clic en el botón, establece el estado de favorito en verdadero
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://s1.elespanol.com/2023/09/13/actualidad/794181310_236024913_1706x960.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
               
                <p className="card-text">Tripulacion: {vehicle ? vehicle.crew : 'No disponible'}</p>
                <p className="card-text">Modelo: {vehicle ? vehicle.model : 'No disponible'}</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/singlev/${props.id}`} className="btn btn-danger">Más info</Link>
                    <button className="btn btn-warning" onClick={handleAddToFavorites}>
                        {/* Cambia el color del corazón según si el vehículo es favorito o no */}
                        <i className="fa fa-heart" style={{ color: isFavorite ? 'red' : 'white' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

CardVehicles.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
};

export default CardVehicles;
