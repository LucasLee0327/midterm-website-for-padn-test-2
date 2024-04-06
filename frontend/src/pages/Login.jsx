import React, { Component } from "react";
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../AuthContext';

function LoginPage() {

    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext? authContext.isLoggedIn : false

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);
    const [credential, setCredential] = useState({ username: "", password: ""});
    const [error, setError] = useState("");

    /** @type {React.ChangeEventHandler<HTMLInputElement>} */
    const handleTextInputChange = ({ target: { name, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
        setCredential((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        const credentials = {
            username: credential.username,
            password: credential.password,
        };
        try {
            await login(credentials);
            if (isLoggedIn) {
                navigate('/');
            } else {
                setError("Invalid username or password!");
            }
            // navigate('/');
        } catch(error) {
            setError("Invalid username or password!");
        }
    };

    return (
        <>
        {/*
            This example requires updating your template:

            ```
            <html class="h-full bg-gray-50">
            <body class="h-full">
            ```
        */}
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
            <div>
                <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Login
                </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="username" className="sr-only">
                        Username
                    </label>
                    <input
                        name="username"
                        type="text"
                        required
                        className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Username"
                        value={credential.username}
                        onChange={handleTextInputChange}
                    />
                    <label htmlFor="username" className="sr-only">
                    Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        required
                        className="relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Password"
                        value={credential.password}
                        onChange={handleTextInputChange}
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Login
                </button>
                </div>
            </form>
            </div>
        </div>
        <prev>{error}</prev>
        </>
  );
}

export default LoginPage


//    const [credential, setCredential] = useState({ username: "", password: ""});
//    const [loggedIn, setLoggedIn] = useState(false);
//    const [error, setError] = useState("");

//    /** @type {React.ChangeEventHandler<HTMLInputElement>} */
//    const handleTextInputChange = ({ target: { name, value } }) => {
        // const { name, value } = event.target
        // obj = { ...prev }; obj[name] = value
//        setCredential((prev) => ({
//        ...prev,
//        [name]: value,
//        }));
//    };

//    /** @type {React.FormEventHandler<HTMLFormElement>} */
//    const handleFormSubmit = async(event) => {
//        event.preventDefault();
//        try {
            // 發送登入請求給後端
//            const { username, password } = credential;
//            await services.auth.login({ username: username, password: password });
            // 登入成功後導向首頁
//            setLoggedIn(true);
//        } catch (error) {
//        setError(error.message);
//        }
//    };

//    if(loggedIn) {
//        return <Navigate to="/" />;
//    }
