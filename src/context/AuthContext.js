import { createContext, useContext, useEffect,useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import {auth} from '../firebase';
const UserContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const [user, setUser] = useState({});
   
    const logout = ()=>{
        return signOut;
    }
    const signin = (email, password) =>{
        signInWithEmailAndPassword(auth ,email, password);
    }
    const creatUser = ( email, password) => {
        createUserWithEmailAndPassword(auth ,email, password);
         
   }
   useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    });
    return () =>{
       unsubscribe(); 
    }
})
    return(
        <UserContext.Provider  value={{creatUser, user,logout,signin}}>
            {children}
        </UserContext.Provider>
    )
        
}

export const UserAuth = () => {
    return useContext(UserContext)
}