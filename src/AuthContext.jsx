import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const storedToken = localStorage.getItem("token");
    const storedLogInData = localStorage.getItem("logInData");
    const storedHabitsDone = localStorage.getItem("habitsDone");
    const storedHabitsTotal = localStorage.getItem("habitsTotal");

    const [token, setToken] = useState(storedToken || null);
    const [logInData, setLogInData] = useState(storedLogInData || null);
    const [habitsDone, setHabitsDone] = useState(parseInt(storedHabitsDone) || 0);
    const [habitsTotal, setHabitsTotal] = useState(parseInt(storedHabitsTotal) || 0);

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

    useEffect(() => {
        if (habitsDone) {
            localStorage.setItem("habitsDone", habitsDone);
        } else {
            localStorage.removeItem("habitsDone");
        }
    }, [habitsDone]);

    useEffect(() => {
        if (habitsTotal) {
            localStorage.setItem("habitsTotal", habitsTotal);
        } else {
            localStorage.removeItem("habitsTotal");
        }
    }, [habitsTotal]);

    console.log(habitsDone);
    console.log(habitsTotal);

    return (
        <AuthContext.Provider
            value={{
                token,
                setToken,
                logInData,
                setLogInData,
                habitsDone,
                setHabitsDone,
                habitsTotal,
                setHabitsTotal,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
