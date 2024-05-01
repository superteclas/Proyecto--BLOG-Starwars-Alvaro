import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

export const CardPeople = ({ people }) => {
    const { store, actions } = useContext(Context);
    const addHeart = store.favorites.includes(people.name);

    const addFavorites = () => {
        actions.favoriteList(people.name);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://starwars-visualguide.com/assets/img/characters/${people.id}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-text">{people.name}</h5>
                <p className="card-text">Gender: {people.gender}</p>
                <p className="card-text">Hair color: {people.hair_color}</p>
                <p className="card-text">Eye color: {people.eye_color}</p>
                <Link to={"/detalles/people/" + people.id}>
                    <button className="btn btn-outline-primary me-6">Learn more!</button>
                </Link>
                <button className="btn btn-outline-primary ms-5" onClick={addFavorites}>
                    <i className={`fa-regular fa-heart ${addHeart ? "fas" : "far"}`}></i>
                </button>
            </div>
        </div>
    );
};
