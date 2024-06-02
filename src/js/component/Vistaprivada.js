import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import FavoritesDropdown from "../component/FavoritesDropdown.js";
import "../../styles/demo.css";

export const Vistaprivada = () => {
    const {  } = useContext(Context);
  

 

    return (
        <div className="container-demo">
            <h2 className="titulo-private">Tus favoritos</h2>
            <div className="container-dem">
            <FavoritesDropdown />
            </div>
        </div>
    );
};
