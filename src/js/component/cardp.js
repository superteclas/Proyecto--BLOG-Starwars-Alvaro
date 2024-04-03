import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardPlanetas = (props) => {
    const { store, actions } = useContext(Context);
    const { planet } = store;
    const [isFavorite, setIsFavorite] = useState(false); // Estado local para controlar si el planeta es favorito o no

    useEffect(() => {
        if (props.id) {
            actions.getPlanetDetails(props.id);
        }
    }, [props.id]);

    const handleAddToFavorites = () => {
        actions.addItem(props.name);
        setIsFavorite(true); // Cuando se hace clic en el botón, establece el estado de favorito en verdadero
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://static.wikia.nocookie.net/esstarwars/images/c/c9/Galaxymap3.jpg/revision/latest?cb=20210504230731" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                
                <p className="card-text">Habitantes: {planet ? planet.population : 'No disponible'}</p>
                <p className="card-text">Superficie: {planet ? planet.terrain : 'No disponible'}</p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/singlep/${props.id}`} className="btn btn-danger">Más info</Link>
                    <button className="btn btn-warning" onClick={handleAddToFavorites}>
                        {/* Cambia el color del corazón según si el planeta es favorito o no */}
                        <i className="fa fa-heart" style={{ color: isFavorite ? 'red' : 'white' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

CardPlanetas.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
};

export default CardPlanetas;
