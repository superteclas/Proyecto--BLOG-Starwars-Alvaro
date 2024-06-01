import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";

export const Card = (props) => {
    const token = localStorage.getItem("token");
    const [favorites, setFavorites] = useState([[], [], []]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [[], [], []];
        setFavorites(storedFavorites);
    }, []);

    const updateFavorites = (newFavorites) => {
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    };

    const isFavorite = [
        ...(favorites[0] || []),
        ...(favorites[1] || []),
        ...(favorites[2] || [])
    ].some((favorite) => favorite.name === props.item.name);

    const addOrRemove = () => {
        const categoryIndex = props.category === "people" ? 0 : props.category === "planets" ? 1 : 2;
        let newFavorites = [...favorites];

        if (isFavorite) {
            newFavorites[categoryIndex] = newFavorites[categoryIndex].filter((fav) => fav.uid !== props.item.uid);
        } else {
            newFavorites[categoryIndex].push(props.item);
        }

        updateFavorites(newFavorites);
    };

    const category = props.category === "people" ? "characters" :
                     props.category === "planets" ? "planets" :
                     props.category === "vehicles" ? "vehicles" : "";
    let noImageUrl = "";

    if (props.category === "planets" && props.item.uid === "1") {
        noImageUrl = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
    }

    return (
        <div className="card m-3" style={{ minWidth: "300px" }}>
            <img className="image"
                src={noImageUrl !== "" ? noImageUrl : `https://starwars-visualguide.com/assets/img/${category}/${props.item.uid}.jpg`}
                alt="image"
            />
            <div className="card-body bg-light">
                <h5 className="card-title">{props.item.name}</h5>
                <p className="card-text mb-0"> {
                    props.category === "people" ? "Gender: " :
                    props.category === "planets" ? "Population: " :
                    props.category === "vehicles" ? "Cargo Capacity: " : ""
                }</p>
                <p className="card-text mb-0"> {
                    props.category === "people" ? "Hair color: " :
                    props.category === "planets" ? "Terrain: " :
                    props.category === "vehicles" ? "Consumables: " : ""
                }</p>
                <p className="card-text"> {
                    props.category === "people" ? "Eye-Color: " :
                    props.category === "planets" ? "Climate: " :
                    props.category === "vehicles" ? "Crew: " : ""
                }</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/details/${props.category}/${props.item.uid}`}>
                        <button className="btn text-primary border-primary">Learn More!</button>
                    </Link>
                    {token ?
                        <button className={`corazon btn btn-outline-warning`} onClick={addOrRemove}>
                            <i className={`fa-heart ${isFavorite ? "fas text-warning" : "far"}`}></i>
                        </button>
                        : null
                    }
                </div>
            </div>
        </div>
    );
};
