import React, {useState, useEffect, createContext} from "react";
import {auth, db} from "../config/FirebaseConfig"


export const AuthContext = createContext();

export default function AuthProvider(props) {
    const {children} = props;
    const [userData, setUserData] = useState(null);
    

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                getDataUser(user.uid)
            }
            else{
                setUserData(null)
            }
        })
    }, [])


    const getDataUser = async (uid) => {
        const userDataPromesa = await db.collection('user').doc(uid).get();
        setUserData(userDataPromesa.data())
    }

    return <AuthContext.Provider value={userData} >{children}</AuthContext.Provider>
}
