import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlev = () => {
    const { store } = useContext(Context);
    const params = useParams(); // Utiliza useParams para obtener los parámetros de la URL

    // Encuentra el vehículo correspondiente en la lista de vehículos almacenados en el estado
    const vehicle = store.vehicles.find(vehicle => vehicle.uid === params.theid);

    // Si el vehículo no se encuentra, muestra un mensaje de error
    if (!vehicle) {
        return <h1>Vehicle not found</h1>;
    }

    // Renderiza los detalles del vehículo
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-6">
                    <img src="https://s1.elespanol.com/2023/09/13/actualidad/794181310_236024913_1706x960.jpg" alt="luke" className="img-fluid custom-height" />
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display text-white">{vehicle.name}</h3>
                        <p className="lead text-white">Las características de los carácteres, planetas y vehículos son genéricos, al igual que las imágenes porque la API no proporciona imágenes.</p>
                    </div>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid red" }}>
                <div className="row align-items-start mt-2">
                    <div className="col-md-2 footer-single">
                        <h6>Nombre</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Clase</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Pasajeros</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Longitud</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Crew</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Velocidad Máxima</h6>
                        <p>{vehicle.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
