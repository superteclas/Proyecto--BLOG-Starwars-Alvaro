import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store } = useContext(Context);
    const params = useParams(); // Utiliza useParams para obtener los parámetros de la URL

    // Encuentra el personaje correspondiente en la lista de personajes almacenados en el estado
    const character = store.characters.find(character => character.uid === params.theid);

    // Si el personaje no se encuentra, muestra un mensaje de error
    if (!character) {
        return <h1>Character not found</h1>;
    }

    // Renderiza los detalles del personaje
    return (
        
        
        <div className="jumbotron">
        <div className="row align-items-center">
            <div className="col-md-3">
                <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="luke" className="img-fluid" />
            </div>
            <div className="col-md-9">
                <h1 className="display-4">{character.name}</h1>
                <p className="lead">Descripción del personaje...</p>
            </div>
        </div>
    </div>
    );
};
