import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store } = useContext(Context);
    const params = useParams(); 

    const character = store.characters.find(character => character.uid === params.theid);

    
    if (!character) {
        return <h1>Character not found</h1>;
    }

    return (
        <div className="container">
            <div className="row mb-4">
                <div className="col-md-6">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSSth0Lo9BZQzVOJW9Jyypco6pHK8k-Yvhs25JEx5lw&s" alt="luke" className="img-fluid custom-height" />
                </div>
                <div className="col-md-6">
                    <div className="jumbotron">
                        <h3 className="display text-white">{character.name}</h3>
                        <p className="lead text-white">Sed imperdiet molestie sem vitae semper. Maecenas condimentum mattis hendrerit. Sed ultrices ante nisi, eu lobortis leo dictum vel. Mauris vel enim condimentum justo hendrerit placerat eget et erat. Integer mi justo, ultricies quis commodo ut, interdum sed ligula.</p>
                    </div>
                </div>
            </div>
            <div className="container text-center-footer" style={{ borderTop: "1px solid red" }}>
                <div className="row align-items-start mt-2">
                    <div className="col-md-2 footer-single">
                        <h6>{character.name}</h6>
                            <p>{character.name}</p>
                    </div>
                <div className="col-md-2 footer-single">
                    <h6>{character.name}</h6>
                    <p>{character.name}</p>
                </div>
                <div className="col-md-2 footer-single">
                    <h6>{character.name}</h6>
                    <p>{character.name}</p>
                </div>
                <div className="col-md-2 footer-single">
                    <h6>{character.name}</h6>
                    <p>{character.name}</p>
                </div>
                <div className="col-md-2 footer-single">
                    <h6>{character.name}</h6>
                    <p>{character.name}</p>
                </div>
                <div className="col-md-2 footer-single">
                    <h6>{character.name}</h6>
                    <p>{character.name}</p>
                </div>
            </div>
        </div>
        </div>
    );
};
