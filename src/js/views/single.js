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
                <div className="col-md-4 ml-3"> {/* Se añade la clase ml-3 para aplicar un margen izquierdo */}
                    <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" alt="luke" className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h1 className="display-4">{character.name}</h1>
                    <p className="lead">Sed imperdiet molestie sem vitae semper. Maecenas condimentum mattis hendrerit. 
                    Sed ultrices ante nisi, eu lobortis leo dictum vel. Mauris vel enim condimentum justo hendrerit placerat eget et erat. 
                    Integer mi justo, ultricies quis commodo ut, interdum sed ligula. Nunc sodales, tellus quis pharetra finibus, sem ante facilisis ex, ac consectetur erat est sed ipsum. 
                    Aenean at dolor quis enim efficitur pellentesque. Pellentesque luctus mi eu lacus vehicula, eget volutpat arcu maximus. 
                    Donec non nibh risus. Maecenas congue urna elit, quis tincidunt justo luctus at. 
                    Nulla ultrices bibendum consequat. Aenean quis eros ex.</p>
                </div>
            </div>
        </div>
    );
};
