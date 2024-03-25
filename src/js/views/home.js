import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters(); 
    }, []);

    return (
        <div className="container">
            <div>
                
                <div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
                    <ul className="list-group pull-down" id="contact-list">
                        {store.characters.map((character, index) => (
                            <li key={index} className="list-group-item">
                                {character.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
