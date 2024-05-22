import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = ({ isLoggedIn,handleLogout }) => {
    const { store, actions } = useContext(Context);
    const { favorites } = store;

    const handleRemoveFavorite = (favoriteName, event) => {
        event.stopPropagation();
        actions.deleteFavorite(favoriteName);
    };

    return (
        <nav className="navbar navbar-light bg-dark mb-3" style={{ width: '100%' }}>
            <Link to="/" className="navbar-brand ml-0 h1" style={{ width: '7%', marginLeft: '7em' }}>
                <img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="Logo" style={{ width: '100%', height: 'auto', filter: 'invert(100%)' }} />
            </Link>
            {isLoggedIn && (
                <div className="dropdown" style={{ marginRight: '1em' }}>
                    <a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favoritos ({favorites.length})
                    </a>
                    <ul className="dropdown-menu">
                        <li className="dropdown-header">Favoritos</li>
                        {favorites.map((favorite, index) => (
                            <li key={index} className="d-flex align-items-center">
                                <span className="dropdown-item mr-auto">{favorite}</span>
                                <i className="fa fa-trash ml-2 text-black" onClick={(event) => handleRemoveFavorite(favorite, event)}></i>
                            </li>
                        ))}
                        {favorites.length === 0 && (
                            <li>
                                <span className="dropdown-item">No hay favoritos</span>
                            </li>
                        )}
                    </ul>
                </div>
            )}
            {/* Mostrar botón de cerrar sesión si el usuario está autenticado, de lo contrario, mostrar botón de inicio de sesión */}
            {isLoggedIn ? (
                <button className="btn btn-primary ml-3" onClick={handleLogout} style={{ marginRight: '1em' }}>Cerrar sesión</button>
            ) : (
                <Link to="/login" className="btn btn-primary ml-3" style={{ marginRight: '1em' }}>Iniciar sesión</Link>
            )}
        </nav>
    );
};
