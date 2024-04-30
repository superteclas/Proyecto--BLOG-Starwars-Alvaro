import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario
        const loggedIn = await actions.login(email, password); // Esperar a que la acción de inicio de sesión se complete
        if (loggedIn) {
            navigate("/"); // Redirigir al usuario a la página de inicio si el inicio de sesión fue exitoso
        }
    };

    return (
        <div className="container">
            <h1 className="text-center mb-4" style={{ color: "white" }}>Login</h1>
            <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "400px" }}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};
