import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card = (props) => {
    const { store, actions } = useContext(Context);
    const { character } = store;

    useEffect(() => {
        if (props.id) {
            actions.getCharacterDetails(props.id);
        }
    }, [props.id]);

    const handleAddToFavorites = () => {
        actions.addItem(props.name);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdSSth0Lo9BZQzVOJW9Jyypco6pHK8k-Yvhs25JEx5lw&s" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Gender: {character.gender}</p>
                <p className="card-text">Skin Color: {character.skin_color}</p>
                <p className="card-text">Eye-Color: {character.eye_color}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/single/${props.id}`} className="btn btn-danger">Más info</Link>
                    <button className="btn btn-warning" onClick={handleAddToFavorites}>
                    <i className="fa fa-heart" style={{ color: 'red' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
};

export default Card;
