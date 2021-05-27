import React, {useState, useEffect, createContext, useContext} from "react";
import {auth, db} from "../config/FirebaseConfig"


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [userData, setUserData] = useState();
    const [isLoading, setIsLoading] = useState(true)

    const singUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    

    useEffect(() => {
        const unsubcriber = auth.onAuthStateChanged(user => {
            setUserData(user)
            setIsLoading(false)
        })
        return unsubcriber
    }, [])

    
    const value ={
        userData,
        singUp,
        logIn
    }
    
    console.log(userData)

    // const getDataUser = async (uid) => {
    //     const userDataPromesa = await db.collection('user').doc(uid).get();
    //     setUserData(userDataPromesa.data())
    // }

    return <AuthContext.Provider value={value} >{!isLoading && children}</AuthContext.Provider>
}
