import React from 'react';
import { Route, Navigate } from 'react-router-dom';


function checkToken() {
    const token = localStorage.getItem('token');
    return token != null;
}

  const ProtectedRoute = ({ element, ...rest }) => {
    const isAuthenticated = checkToken();

      return (
        <Route {...rest} element={
             isAuthenticated
                ? element
                 : <Navigate to="/login" />
        } />
    );
};

export default ProtectedRoute;