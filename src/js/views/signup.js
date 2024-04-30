import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const registered = await actions.signup(email, password);
        if (registered) {
            navigate("/login");
        } else {
            alert("El usuario ya existe. Por favor, inicia sesión.");
            navigate("/login");
        }
    };

    return (
        <div className="container">
            <h1 className="text-center mb-4" style={{ color: "white" }}>Signup</h1>
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
                    <button type="submit" className="btn btn-primary">Signup</button>
                </div>
            </form>
            <p className="text-center mt-3">Si ya estás registrado, <a href="/login">logeate aquí</a>.</p>
        </div>
    );
};
