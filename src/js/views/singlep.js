import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlep = () => {
    const { store } = useContext(Context);
    const params = useParams(); // Utiliza useParams para obtener los parámetros de la URL

    // Encuentra el planeta correspondiente en la lista de planetas almacenados en el estado
    const planet = store.planets.find(planet => planet.uid === params.theid);

    // Si el planeta no se encuentra, muestra un mensaje de error
    if (!planet) {
        return <h1>Planet not found</h1>;
    }

    // Renderiza los detalles del planeta
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://static.wikia.nocookie.net/esstarwars/images/c/c9/Galaxymap3.jpg/revision/latest?cb=20210504230731" alt="luke" className="img-fluid custom-height" />
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display text-white">{planet.name}</h3>
                        <p className="lead text-white">Sed imperdiet molestie sem vitae semper. Maecenas condimentum mattis hendrerit. Sed ultrices ante nisi, eu lobortis leo dictum vel. Mauris vel enim condimentum justo hendrerit placerat eget et erat. Integer mi justo, ultricies quis commodo ut, interdum sed ligula.</p>
                    </div>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid red" }}>
                <div className="row align-items-start mt-2">
                    <div className="col-md-2 footer-single">
                        <h6>{planet.name}</h6>
                        <p>{planet.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{planet.name}</h6>
                        <p>{planet.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{planet.name}</h6>
                        <p>{planet.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{planet.name}</h6>
                        <p>{planet.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{planet.name}</h6>
                        <p>{planet.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{planet.name}</h6>
                        <p>{planet.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
