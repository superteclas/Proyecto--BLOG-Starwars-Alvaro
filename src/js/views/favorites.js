import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    }, [navigate]);

    return (
        <h1 style={{ color: "white" }}>HOLA PAGINA DE FAVORITOS</h1>
    );
};

export default Favorites;