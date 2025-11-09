import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useUser } from "../Context/User-Context";
import { Dashboard } from "./Dashboard";
import { LoginForm } from "./loginForm";

export const Content=()=>{

    const {theme}=useContext(ThemeContext);
    const {user,login}=useUser()
    

    return <main 
    className={` flex justify-center w-full items-center p-6 h-screen ${theme?'bg-gray-300 text-black':'bg-gray-800 text-white'}`}>

            
                { user.isLoggedIn?<Dashboard/>:<LoginForm/>}
            

    </main>
}

