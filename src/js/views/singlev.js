import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlev = () => {
    const { store } = useContext(Context);
    const params = useParams(); // Utiliza useParams para obtener los parámetros de la URL

    // Encuentra el personaje correspondiente en la lista de personajes almacenados en el estado
    const vehicle = store.vehicles.find(vehicle => vehicle.uid === params.theid);

    // Si el personaje no se encuentra, muestra un mensaje de error
    if (!vehicle) {
        return <h1>Vehicle</h1>;
    }

    // Renderiza los detalles del personaje
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-6 image-container-single"> 
                    <img src="https://s1.elespanol.com/2023/09/13/actualidad/794181310_236024913_1706x960.jpg" alt="luke" className="img-fluid img-single" />
                </div>
                <div className="col-md-6 image-text">
                    <h3 className="display text-white">{vehicle.name}</h3>
                    <p className="lead text-white">Sed imperdiet molestie sem vitae semper. Maecenas condimentum mattis hendrerit. 
                    Sed ultrices ante nisi, eu lobortis leo dictum vel. Mauris vel enim condimentum justo hendrerit placerat eget et erat. 
                    Integer mi justo, ultricies quis commodo ut, interdum sed ligula. </p>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid red" }}> {/* Agregamos el estilo para el borde superior */}
                <div className="row align-items-start mt-2">
                    <div className="col-md-2 footer-single">
                        <h6>{vehicle.name}</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{vehicle.name}</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{vehicle.name}</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{vehicle.name}</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{vehicle.name}</h6>
                        <p>{vehicle.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>{vehicle.name}</h6>
                        <p>{vehicle.name}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
