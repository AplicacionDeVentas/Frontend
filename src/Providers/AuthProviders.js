import React, {useState, useEffect, createContext, useContext} from "react";
import {auth, db} from "../config/FirebaseConfig"


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const singUp = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const logIn = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const getDataUser = async (uid) => {
        const docUser = await db.collection('user').doc(uid);
        const observer = docUser.onSnapshot(docUserSnapshot => {
            if(docUserSnapshot){
                return setUserData(docUserSnapshot.data())
            }
            return setUserData(null)
        }, err => {
            return setUserData(null)
        })
    }
    
    useEffect(() => {
        const unsubcriber = auth.onAuthStateChanged(user => {
            if(user){
                getDataUser(user.uid)
            }else{
                setUserData(null)
            }
            setIsLoading(false)
        })
        return unsubcriber
    }, [])

    
    const value ={
        userData,
        singUp,
        logIn
    }
    

    return <AuthContext.Provider value={value} >{!isLoading && children}</AuthContext.Provider>
}
