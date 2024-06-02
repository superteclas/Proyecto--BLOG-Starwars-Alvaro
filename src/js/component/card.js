import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css";
import { Context } from "../store/appContext";

export const Card = (props) => {
    const { actions } = useContext(Context);
    const [isFavorite, setIsFavorite] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [[], [], []];
        const categoryIndex = props.category === "people" ? 0 : props.category === "planets" ? 1 : 2;
        setIsFavorite(storedFavorites[categoryIndex].some((favorite) => favorite.uid === props.item.uid));
    }, [props.category, props.item.uid]);

    const addOrRemove = async () => {
        const categoryIndex = props.category === "people" ? 0 : props.category === "planets" ? 1 : 2;
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [[], [], []];
        let newFavorites = [...storedFavorites];
        
        if (isFavorite) {
            newFavorites[categoryIndex] = newFavorites[categoryIndex].filter((fav) => fav.uid !== props.item.uid);
        } else {
            newFavorites[categoryIndex].push(props.item);
        }

        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        setIsFavorite(!isFavorite);
        await actions.favorites();
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
                    {token &&
                        <button className={`btn btn-outline-danger`} onClick={addOrRemove}>
                            <i className={`fa-heart ${isFavorite ? "fas text-danger" : "far"}`}></i>
                        </button>
                    }
                </div>
            </div>
        </div>
    );
};
