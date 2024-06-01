import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import FavoritesDropdown from "../component/FavoritesDropdown.js";
import "../../styles/demo.css";

export const Vistaprivada = () => {
    const {  } = useContext(Context);
  

 

    return (
        <div className="container-demo">
            <h2 className="mb-4">Tus favoritos</h2>
            {/* Agregar el componente FavoritesDropdown */}
            <FavoritesDropdown />
            
        </div>
    );
};
