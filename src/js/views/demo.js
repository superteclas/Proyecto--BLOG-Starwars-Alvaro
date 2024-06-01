import React, { useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Vistaprivada } from "../component/Vistaprivada.js";
import "../../styles/demo.css";

export const Demo = () => {
    const { store } = useContext(Context);
    const token = localStorage.getItem("token");

    if (!token) {
        return (
            <div className="container">
                <h1>Para acceder a esta página necesitas estar logeado</h1>
                <p>Por favor, <Link to="/login">inicia sesión</Link> para acceder al contenido.</p>
            </div>
        );
    }

    return (
        <div className="container-demo">
    

            {/* Agregamos el componente Vistaprivada */}
            <Vistaprivada />
        </div>
    );
};
