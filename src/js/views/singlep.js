import React, { useContext } from "react";
import {useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlep = () => {
    const { store } = useContext(Context);
    const params = useParams(); // Utiliza useParams para obtener los parámetros de la URL

    // Encuentra el planeta correspondiente en la lista de planetas almacenados en el estado
    const planetDetails = store.planet.details;
    console.log(planetDetails);

    // Si el planeta no se encuentra, muestra un mensaje de error
    if (!planetDetails) {
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
                        <h3 className="display text-white">{planetDetails.name}</h3>
                        <p className="lead text-white">Las características de los carácteres, planetas y vehículos son genéricos, al igual que las imágenes porque la API no proporciona imágenes.</p>
                    </div>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid red" }}>
                <div className="row align-items-start mt-2">
                    <div className="col-md-2 footer-single">
                        <h6>Nombre</h6>
                        <p>{planetDetails.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Clima</h6>
                        <p>{planetDetails.climate}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Habitantes</h6>
                        <p>{planetDetails.population}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Superficie</h6>
                        <p>{planetDetails.terrain}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Periodo de Rotación</h6>
                        <p>{planetDetails.rotation_period}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Diametro</h6>
                        <p>{planetDetails.diameter}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
