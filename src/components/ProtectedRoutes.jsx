import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {

    const token = localStorage.getItem('token');

        // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no
    if(token){
        return <Outlet />
    } else { 
        return <Navigate to='/login' />
    }
};

export default ProtectedRoutes;