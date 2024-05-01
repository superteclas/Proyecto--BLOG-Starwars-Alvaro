
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Detalles } from "./views/detalles";
import { Login } from "./views/login";
import { Signup } from "./views/signup";
import { Favorites } from "./views/favorites"

const Layout = () => {
    // The basename is used when your project is published in a subdirectory and not in the root of the domain.
    // You can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
            
                <ScrollToTop>
                    
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/detalles/:type/:uid" element={<Detalles />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
