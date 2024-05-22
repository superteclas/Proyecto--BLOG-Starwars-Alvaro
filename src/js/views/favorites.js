import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar.js";

const Favorites = () => {
    const navigate = useNavigate();
    const [hasReloaded, setHasReloaded] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    useEffect(() => {
        const reloaded = localStorage.getItem("hasReloaded");

        if (!isLoggedIn && !reloaded) {
            localStorage.setItem("hasReloaded", "true");
            setHasReloaded(true);
            window.location.reload();
        }
    }, [isLoggedIn]);

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} /> {/* Pasa el estado de autenticación al Navbar */}
            <h1 style={{ color: "white" }}>HOLA PAGINA DE FAVORITOS</h1>
        </div>
    );
};

export default Favorites;
