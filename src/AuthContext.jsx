import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storedToken = localStorage.getItem("token");
    const storedLogInData = localStorage.getItem("logInData");

    const [token, setToken] = useState(storedToken || null);
    const [logInData, setLogInData] = useState(storedLogInData || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    useEffect(() => {
        if (logInData) {
            localStorage.setItem("logInData", logInData);
        } else {
            localStorage.removeItem("logInData");
        }
    }, [logInData]);

    return <AuthContext.Provider value={{ token, setToken, logInData, setLogInData }}>{children}</AuthContext.Provider>;
};