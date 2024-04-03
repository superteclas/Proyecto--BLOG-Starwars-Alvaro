import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const CardVehicles = (props) => {
    const { store, actions } = useContext(Context);
    const { vehicle } = store;

    useEffect(() => {
        if (props.id) {
            actions.getVehicleDetails(props.id);
        }
    }, [props.id]);

    const handleAddToFavorites = () => {
        actions.addItem(props.model);
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.model}</h5>
               
                {vehicle &&
                    <>
                        <p className="card-text">Class: {vehicle.class}</p>
                        <p className="card-text">Speed: {vehicle.max_atmosphering_speed}</p>
                    </>
                }
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Link to={`/singleplanetas/${props.id}`} className="btn btn-danger">Más info</Link>
                    <button className="btn btn-warning" onClick={handleAddToFavorites}>
                        <i className="fa fa-heart" style={{ color: 'red' }}></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

CardVehicles.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
};

export default CardVehicles;
