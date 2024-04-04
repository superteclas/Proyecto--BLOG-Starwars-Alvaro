import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlev = () => {
    const { store } = useContext(Context);
    const params = useParams(); 

    const vehicleDetails = store.vehicle.details;


    
    if (!vehicleDetails) {
        return <h1>Vehicle not found</h1>;
    }

   
    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-6">
                    <img src="https://s1.elespanol.com/2023/09/13/actualidad/794181310_236024913_1706x960.jpg" alt="luke" className="img-fluid custom-height" />
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display text-white">{vehicleDetails.name}</h3>
                        <p className="lead text-white">Las características de los carácteres, planetas y vehículos en las cards son genéricos, al igual que las imágenes porque la API no proporciona imágenes.</p>
                    </div>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid red" }}>
                <div className="row align-items-start mt-2">
                    <div className="col-md-2 footer-single">
                        <h6>Nombre</h6>
                        <p>{vehicleDetails.name}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Fabricante</h6>
                        <p>{vehicleDetails.manufacturer}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Coste</h6>
                        <p>{vehicleDetails.cost_in_credits}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Longitud</h6>
                        <p>{vehicleDetails.length}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Crew</h6>
                        <p>{vehicleDetails.crew}</p>
                    </div>
                    <div className="col-md-2 footer-single">
                        <h6>Velocidad Máxima</h6>
                        <p>{vehicleDetails.max_atmosphering_speed}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
