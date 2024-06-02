import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState(false);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isLogged = await actions.login(email, password);
        if (isLogged) {
            alert('Bienvenid@');
            navigate('/');
        } else {
            setLoginError(true);
            console.log('Login failed');
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h3 className="text-center">Login</h3>
                <div className="mb-3">
                    <label htmlFor="inputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="email@host.com" required onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword" required onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                {loginError ? <div className="text-danger mb-3">Wrong email or password</div> : null}
                <button type="submit" className="btn btn-primary btn-lg w-100">Log In</button>
                <div className="mt-3 text-center">
                    <span>Don't have an account? </span>
                    <Link to="/signup" className="text-primary">Create one here</Link>
                </div>
            </form>
        </div>
    );
};
