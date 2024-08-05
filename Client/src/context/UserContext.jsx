import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [newUser , setNewUser] = useState(null);

    const currentuser = JSON.parse(sessionStorage.getItem(newUser ? "user" : "admin"));
    const [loggedIn, setLoggedIn] = useState(currentuser !== null);
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.removeItem('user');
        setLoggedIn(false);
        navigate('/main/home');
    }

    const SignOut = () => {
        sessionStorage.removeItem('admin');
        setLoggedIn(false);
        navigate('/main/home');
    }


    
    return (
        <UserContext.Provider value={{
            loggedIn, setLoggedIn, logout, SignOut
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;