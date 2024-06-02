import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupError, setSignupError] = useState(false);
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await actions.signup(email, password);
        if (success) {
            alert('Signup successful');
            navigate('/');
        } else {
            setSignupError(true);
            alert('Signup failed');
        }
    };

    return (
        <form className="m-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="email@host.com" required onChange={(event) => { setEmail(event.target.value) }} />
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" required onChange={(event) => { setPassword(event.target.value) }} />
            </div>
            {signupError ? <div className="text-danger mb-3">Error creating account. Please try again.</div> : null}
            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
            <div className="mt-3">
                <span>Already have an account? </span>
                <Link to="/login" className="text-primary">Log in here</Link>
            </div>
        </form>
    );
};
