import React, { useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Vistaprivada } from "../component/Vistaprivada.js";

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
        <div className="container">
            <h1>Bienvenido a la página de demostración</h1>
            <p>Esta es la página principal de la demostración.</p>

            {/* Agregamos el componente Vistaprivada */}
            <Vistaprivada />
        </div>
    );
};
