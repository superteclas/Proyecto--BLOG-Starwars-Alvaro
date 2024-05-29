import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { favorites, isLoggedIn } = store;
    const navigate = useNavigate();

    const handleRemoveFavorite = (favoriteName, event) => {
        event.stopPropagation();
        actions.deleteFavorite(favoriteName);
    };

    const handleLogOut = () => {
        actions.logOut();
        navigate('/');
    };

    return (
        <nav className="navbar navbar-light bg-dark mb-3" style={{ width: '100%' }}>
            <Link to="/" className="navbar-brand ml-0 h1" style={{ width: '7%', marginLeft: '7em' }}>
                <img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="Logo" style={{ width: '100%', height: 'auto', filter: 'invert(100%)' }} />
            </Link>
            <div className="dropdown" style={{ marginRight: '1em' }}>
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                    Favoritos ({favorites.length})
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li className="dropdown-header">Favoritos</li>
                    {favorites.length > 0 ? (
                        favorites.map((favorite, index) => (
                            <li key={index} className="d-flex align-items-center">
                                <span className="dropdown-item mr-auto">{favorite}</span>
                                <i className="fa fa-trash ml-2 text-black" onClick={(event) => handleRemoveFavorite(favorite, event)}></i>
                            </li>
                        ))
                    ) : (
                        <li>
                            <span className="dropdown-item">No hay favoritos</span>
                        </li>
                    )}
                </ul>
            </div>
            {isLoggedIn ? (
                <button className="btn btn-primary ml-3" onClick={handleLogOut} style={{ marginRight: '1em' }}>Cerrar sesión</button>
            ) : (
                <Link to="/login" className="btn btn-primary ml-3" style={{ marginRight: '1em' }}>Iniciar sesión</Link>
            )}
        </nav>
    );
};
