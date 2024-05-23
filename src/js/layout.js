import React from "react";
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

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <ConditionalNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
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

const ConditionalNavbar = () => {
    const location = useLocation();

    // Define an array of paths where the Navbar should not be displayed
    const pathsWithoutNavbar = ["/login", "/signup","/favorites"];

    // Render Navbar only if the current path is not in the pathsWithoutNavbar array
    return !pathsWithoutNavbar.includes(location.pathname) ? <Navbar /> : null;
};

export default injectContext(Layout);