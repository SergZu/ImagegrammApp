import React, { useContext, useEffect, useState } from 'react';
import { firebaseApp } from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword, onAuthStateChanged, User } from 'firebase/auth';

import {authContext, AuthProviderProps } from '../types/types';

const AuthContext = React.createContext<authContext | null>(null);
// Create global storage and storage get hook
export const useAuth = () =>  {
    return useContext(AuthContext as React.Context<authContext>)
}
const auth = getAuth(firebaseApp);
export const AuthProvider = ({ children } : AuthProviderProps) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [currentUser, setCurrentUser] = useState<any>(null);
    // Authorization function using Firebase.auth SDK
    function signUp(email : string, password : string) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logIn(email : string, password : string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth)
    }

    function updatePass(user : User, password : string){
        return updatePassword(currentUser, password)
    }

    function  resetPassword(email : string){
        return sendPasswordResetEmail(auth, email)
    }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return () => {
            setCurrentUser(null);
            setLoading(true);
        }
    }, [])
    

    const value = {
        currentUser,
        signUp,
        logIn,
        logOut,
        resetPassword,
        updatePass 
    }
    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
            
    )
}

