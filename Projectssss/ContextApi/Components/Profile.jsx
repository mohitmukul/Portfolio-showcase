
import { Header } from "./Header"
import { Content } from "./Content"
import { ThemeProvider } from "../Context/ThemeContext"
import { UserProvider } from "../Context/User-Context"

export const UserProfile=()=>{

    return <ThemeProvider>
        <UserProvider>
            <Header/>
            
            <Content/>

        </UserProvider>

    </ThemeProvider>

}