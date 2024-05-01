// Favorites.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store/appContext"; // Importa useStore desde tu contexto

const Favorites = () => {
    const { actions } = useStore(); // Obtén las acciones del contexto
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await actions.getFavorites(); // Utiliza la función getFavorites del contexto para obtener los favoritos
                setFavorites(data); // Actualiza el estado con los favoritos obtenidos
            } catch (error) {
                console.error("Error fetching favorites:", error);
                navigate("/login"); // Maneja el error redirigiendo al usuario a la página de inicio de sesión
            }
        };

        fetchFavorites();
    }, [actions, navigate]); // Agrega actions y navigate como dependencias

    return (
        <div className="container">
            <h1 className="text-center mb-4">My Favorites</h1>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((favorite, index) => (
                        <li key={index}>
                            {/* Renderiza la información de cada favorito */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorites found.</p>
            )}
        </div>
    );
};

export default Favorites;
