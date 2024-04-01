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
            <h1 className="display-4">{character.name}</h1>
            <p className="lead">Gender: {character.gender}</p>
            <p className="lead">Hair Color: {character.hairColor}</p>
            <p className="lead">Eye-Color: {character.eyeColor}</p>

            <hr className="my-4" />

            
        </div>
    );
};
