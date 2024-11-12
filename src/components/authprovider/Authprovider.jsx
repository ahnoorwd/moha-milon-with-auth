
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
   export const AuthContext = createContext(null);

   const googleprovider = new GoogleAuthProvider();
   const Authprovider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setloading] = useState(true);
    const name ='potata ala bokra '
    const usercreator = (email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const userSignin = (email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signwithgoogle = ()=>{
    return signInWithPopup(auth,googleprovider)
    }
    const signout = () =>{
        setloading(true);
        return signOut(auth);
    }


    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        console.log('current user',currentUser);
        setUser(currentUser);
        setloading(false);
     })
     return () =>{
        unsubscribe();
     }
    },[])

    const authinfo = {
          name,user,usercreator,userSignin,signout,loading,signwithgoogle
    }
    return (
        <>
            <AuthContext.Provider value={authinfo}>
            {children}
            </AuthContext.Provider>
        </>
    );
};

export default Authprovider;