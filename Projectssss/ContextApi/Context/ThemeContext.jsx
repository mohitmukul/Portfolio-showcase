import { createContext, useContext, useEffect, useState } from "react"

export const ThemeContext=createContext()
export const ThemeProvider=({children})=>{

    const [theme,setTheme]=useState(false)

    useEffect(()=>{
        localStorage.setItem('theme',JSON.stringify(theme))
    },[theme])


     useEffect(()=>{
       const storedData= localStorage.getItem('theme')
       if(storedData){
        setTheme(JSON.parse(storedData))
       }
    },[])

    const ToggleTheme=()=>{
        
        setTheme(c=>!c)
    }

   return <ThemeContext value={{theme,ToggleTheme}}>
        {children}
        </ThemeContext>

}

export const useTheme=()=>useContext(ThemeContext)