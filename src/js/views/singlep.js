import React, { useContext } from "react";
import {useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlep = () => {
    const { store } = useContext(Context);
    const params = useParams(); 

   
    const planetDetails = store.planet.details;
    console.log(planetDetails);

    
    if (!planetDetails) {
        return <h1>Planet not found</h1>;
    }

   
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src="https://static.wikia.nocookie.net/esstarwars/images/c/c9/Galaxymap3.jpg/revision/latest?cb=20210504230731" alt="luke" className="img-fluid custom-height" />
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display text-white">{planetDetails.name}</h3>
                        <p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas eros eget volutpat imperdiet. Fusce non consectetur arcu. Vivamus vel ultrices mauris. Etiam lobortis, felis in porttitor rutrum, neque metus varius lacus, ac volutpat massa nisl nec justo. Quisque sed viverra erat, sed lacinia lorem. Pellentesque sed nisl quis arcu lacinia cursus. Fusce fermentum blandit consequat. Quisque vitae ante ac diam condimentum fermentum vitae ac arcu. Quisque cursus facilisis arcu eu feugiat. Nam fringilla lacus ultricies velit tristique mattis. Vestibulum quis enim sed magna luctus porta quis vel diam. Cras at orci vulputate, tincidunt nunc vel, faucibus neque. Aliquam sit amet aliquam magna. Fusce ac dolor turpis.</p>
                    </div>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid white" }}>
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
