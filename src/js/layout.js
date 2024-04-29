// Layout.js
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Detalles } from "./views/detalles";
import { Login } from "./views/login";
import { Context } from "./store/appContext"; // Importa el contexto de tu aplicación

const Layout = () => {
    const { store } = useContext(Context);

    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    if (!store.isLoggedIn) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* Redirige a la página de inicio de sesión */}
                    <Route path="/" element={<Navigate to="/login" />} />
                </Routes>
            </BrowserRouter>
        );
    }

    // Si el usuario está autenticado, muestra el resto de la aplicación
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/detalles/:type/:uid" element={<Detalles />} />
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
