import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    navigate("/login");
                    return;
                }

                const response = await fetch("/users/favorites", {
                    method: "GET",
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setFavorites(data.results); // Asignar directamente los resultados de favoritos
                } else {
                    if (response.status === 401) {
                        navigate("/login");
                    } else {
                        console.error("Error fetching favorites:", response.statusText);
                    }
                }
            } catch (error) {
                console.error("Error fetching favorites:", error);
            }
        };

        fetchFavorites();
    }, []);

    return (
        <div className="container">
            <h1 className="text-center mb-4">My Favorites</h1>
            {favorites.length > 0 ? (
                <ul>
                    {favorites.map((favoriteGroup, index) => (
                        <li key={index}>
                            <h3>Favorite Group {index + 1}</h3>
                            <ul>
                                {favoriteGroup.map((favorite, idx) => (
                                    <li key={idx}>
                                        <p>ID: {favorite.id}</p>
                                        <p>User ID: {favorite.user_id}</p>
                                    </li>
                                ))}
                            </ul>
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
