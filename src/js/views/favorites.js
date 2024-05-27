import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar.js";
import { Context } from "../store/appContext"; 

const Favorites = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context); 
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

    useEffect(() => {
        if (isLoggedIn) {
            actions.getFavorites();
        }
    }, [isLoggedIn, actions]);

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} />
            <h1 style={{ color: "white" }}>HOLA PAGINA DE FAVORITOS</h1>
            <div>
                {store.favorites.length > 0 ? (
                    <ul>
                        {store.favorites.map((favorite, index) => (
                            <li key={index} style={{ color: "white" }}>{favorite}</li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ color: "white" }}>No hay favoritos añadidos.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
