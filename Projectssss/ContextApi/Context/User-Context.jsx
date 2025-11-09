import { createContext, useContext, useEffect, useState } from "react";

const UserContext=createContext();

export const UserProvider=({children})=>{

   const [user,setUser]=useState({
    name:'',
    email:'',
    password:'',
    isLoggedIn:false
   })

   useEffect(()=>{

    const StoredData=localStorage.getItem("user");
    if(StoredData){
        setUser(JSON.parse(StoredData))
    }

   },[])

   function login({name,email,password}){

    const User={name,email,password,isLoggedIn:true}
    localStorage.setItem("user",JSON.stringify(User));
    setUser(User)

   }

   function Logout(){
    setUser({name:'',email:'',password:'',isLoggedIn:false})
    localStorage.removeItem("user")
   }

   return <UserContext.Provider value={{user,login,Logout}}>
    {children}

   </UserContext.Provider>

}

export const useUser=()=>useContext(UserContext) 