import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)

const Authindex = ({children}) => {
    const [user, SetUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            SetUser(currentUser)
            setLoading(false);
        });
        return () => {
            return unsubscribe();

        }
    }, [])

    const authinfo = { 
        user,
        createUser,
        loading,
        login,
        logOut
    }

    return (
       <AuthContext.Provider value={authinfo}>
          {children}
       </AuthContext.Provider>
    )
}

export default Authindex