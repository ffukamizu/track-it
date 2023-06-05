import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storedToken = localStorage.getItem("token");
    const [token, setToken] = useState(storedToken || null);
    const [logInData, setLogInData] = useState(null);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    return <AuthContext.Provider value={{ token, setToken, logInData, setLogInData }}>{children}</AuthContext.Provider>;
};
