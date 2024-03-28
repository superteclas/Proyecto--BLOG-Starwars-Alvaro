// En el componente Card.js

import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

export const Card = (props) => {
    const { store, actions } = useContext(Context);
    const { character } = store;

    useEffect(() => {
        // Obtener los detalles del personaje al cargar la página
        if (props.id) {
            actions.getCharacterDetails(props.id);
        }
    }, [props.id]); // Ejecutar el efecto cuando cambie la ID del personaje

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender: {props.id}</p>
                <p className="card-text">Hair Color: {props.name}</p> 
                <p className="card-text">Eye-Color: {props.name}</p>  {/* Mostrar el género del personaje */}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
};

export default Card;

