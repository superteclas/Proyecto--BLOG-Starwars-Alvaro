import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useStore } from "../store/appContext"; 

const ProtectedRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useStore(); 

    return isAuthenticated ? (
        <Route {...rest} element={element} />
    ) : (
        <Navigate to="/login" replace /> 
    );
};

export default ProtectedRoute;