import React, { Component } from "react";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../AuthContext';

function LogoutPage() {
    const { logout } = useContext(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            console.log('logout OK')
            navigate('/');
        } catch(error) {
            setError("Logout failed!");
        }
    };

    return (
        <>
            <button type='submit' onClick={handleLogout} className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Log out
            </button>
            <prev>{error}</prev>
        </>      
    )
}

export default LogoutPage