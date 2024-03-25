import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getAllCharacters(); 
    }, []);

    return (
        <>
            {store.characters.map((character) => {
                return (
                    <Card name={character.name} key={character.uid} />
                );
            })}
        </>
    );
};
