import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    const handleRemoveFavorite = (favoriteName) => {
        actions.removeFavorite(favoriteName);
    };

    return (
        <nav className="navbar navbar-light bg-light mb-3" style={{ width: '100%' }}>
            <img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="Logo" className="navbar-brand ml-0 h1" style={{ width: '7%', marginLeft: '7em' }} />
            <div className="dropdown ml-auto">
                <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos ({favorites.length})
                </a>
                <ul className="dropdown-menu">
                    <li className="dropdown-header">Favoritos</li>
                    {favorites.map((favorite, index) => (
                        <li key={index}>
                            <span className="dropdown-item">{favorite}</span>
                            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveFavorite(favorite)}>Eliminar</button>
                        </li>
                    ))}
                    {favorites.length === 0 && (
                        <li>
                            <span className="dropdown-item">No hay favoritos</span>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};
