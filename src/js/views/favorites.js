import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"; 

const Favorites = () => {
    const { store, actions } = useContext(Context); 

    // Obtener favoritos cuando el componente se monta si el usuario está logueado
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            actions.getFavorites();
        }
    }, [actions]);

    return (
        <div>
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
