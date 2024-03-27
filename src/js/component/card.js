import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => (
    <div className="card" style={{ width: "18rem" }}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Gender: {props.gender}</p> {/* Nuevo párrafo para mostrar el género */}
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);



