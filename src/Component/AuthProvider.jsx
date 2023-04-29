import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
     



    const auth = getAuth(app);

    const registerFunction = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInFunction = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {

        return signOut( auth );
    }

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect( () => {
      
       const unsubscribe = onAuthStateChanged(auth, currentuser => {

            console.log('change' , currentuser)
            setUser(currentuser);
            setLoading(false);
        });

        return () => {
           unsubscribe();
        }

    },[])

    const authInfo = {

        user,
        registerFunction,
        logInFunction,
        logOut,
        loading
    }

    return (
        <div>

            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;