import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [logInData, setLogInData] = useState(null);

    return <AuthContext.Provider value={{ token, setToken, logInData, setLogInData }}>{children}</AuthContext.Provider>;
};
