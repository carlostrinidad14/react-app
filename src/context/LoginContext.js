import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"
import { auth } from "../firebase/config"

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null
    })

   

  /*   const googleLogin = () => {
        signInWithPopup(auth, provider)
            .catch((error) => {
                console.log(error)
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })  
    } */




    const login = (values) => {
        setLoading(true)

        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((error) => {

                
                if(error.message==="Firebase: Error (auth/user-not-found)."){error.message="El usuario no existe"}
                else if(error.message==="Firebase: Error (auth/wrong-password)."){error.message="Contraseña incorrecta"}else{error.message="Error no definido"}
               
                
                console.log(error)
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                    
                })
              
                
            })
            .finally(() => setLoading(false))
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    error: null
                })
            })
        
    }

  

   


    const register = (values) => {
        setLoading(true)

      
        createUserWithEmailAndPassword(auth , values.email, values.password)
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: values.name
              })
            })
       
            .catch((error) => {
                console.log(error)
                if(error.message==="Firebase: Error (auth/email-already-in-use)."){error.message="El Email ingresado ya está en uso"}
                else if(error.message==="Firebase: Password should be at least 6 characters (auth/weak-password)."){error.message="La contraseña debe ser de al menos 6 caracteres"}else{error.message="Error no definido"}


                
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    error: null
                })
            } else {
                logout()
            }
        })
    }, []) 

    return (
        <LoginContext.Provider value={{ user, login, logout, loading, register}}>
            {children}
        </LoginContext.Provider>
    )
}