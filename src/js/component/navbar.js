import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
    const token = localStorage.getItem("token");

    const handleLogOut = () => {
        localStorage.removeItem("token");
        window.location.reload(); // Recargar la página para redirigir a la página de inicio
    };

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link to="/">
                    <img className="navbar-brand text-black ms-5 logostarwars" src="https://logos-marcas.com/wp-content/uploads/2020/11/Star-Wars-Logo.png" />
                </Link>
                {token ?
                    <>
                        {/* Enlace a la vista privada de favoritos */}
                        <Link to="/private">
                            <button className="btn btn-lg text-white bg-primary rounded">
                                Tus Favoritos
                            </button>
                        </Link>

                        <div>
                            <button className="btn-lg" onClick={handleLogOut}>Log Out</button>
                        </div>
                    </>
                    : (
                        <Link to="/login">
                            <div>
                                <button className="btn-lg">
                                    Log In
                                </button>
                            </div>
                        </Link>
                    )
                }
            </div>
        </nav>
    );
};
