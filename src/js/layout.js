import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Detalles } from "./views/detalles";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import Favorites from "./views/favorites";

const Layout = () => {
    const basename = process.env.BASENAME || "";
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogin = (token) => {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
    };

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <ConditionalNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login onLogin={handleLogin} />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/detalles/:type/:uid" element={<Detalles />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

const ConditionalNavbar = ({ isLoggedIn, handleLogout }) => {
    const location = useLocation();

    const pathsWithoutNavbar = ["/login", "/signup"];

    return !pathsWithoutNavbar.includes(location.pathname) ? (
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    ) : null;
};

export default injectContext(Layout);
