import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlep = () => {
    const { store } = useContext(Context);
    const params = useParams(); // Utiliza useParams para obtener los parámetros de la URL

    // Encuentra el personaje correspondiente en la lista de personajes almacenados en el estado
    const planet = store.planets.find(planet => planet.uid === params.theid);

    // Si el personaje no se encuentra, muestra un mensaje de error
    if (!planet) {
        return <h1>planet not found</h1>;
    }

    // Renderiza los detalles del personaje
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-6 image-container-single"> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSSth0Lo9BZQzVOJW9Jyypco6pHK8k-Yvhs25JEx5lw&s" alt="luke" className="img-fluid img-single" />
                </div>
                <div className="col-md-6 image-text">
                    <h3 className="display text-white">{planet.name}</h3>
                    <p className="lead text-white">Sed imperdiet molestie sem vitae semper. Maecenas condimentum mattis hendrerit. 
                    Sed ultrices ante nisi, eu lobortis leo dictum vel. Mauris vel enim condimentum justo hendrerit placerat eget et erat. 
                    Integer mi justo, ultricies quis commodo ut, interdum sed ligula. </p>
                </div>
            </div>
          
        </div>
    );
};
