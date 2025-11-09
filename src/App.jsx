
import { RecoilRoot } from 'recoil'
import { Portfolio } from './Main-app/Portfolio'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Counter} from '../Projectssss/UseState/Counter'
import {SimpleForm} from '../Projectssss/UseState/Simple-form'
import {Inputref} from '../Projectssss/CoustomHooks/components/Focus-input'
import {PrevCounter} from '../Projectssss/CoustomHooks/components/Previous-value'
import { ThemeSelector } from "./States/Atoms/ThemeAtom"
import { Header } from "./Components/header"
import { NavBar } from './Components/navbar'
import {UserProfile} from '../Projectssss/ContextApi/Components/Profile'
import { Todo } from '../Projectssss/Todo&Api/Components/TodoList'
import { DataFetcher } from '../Projectssss/Todo&Api/Components/ApiCall'
import { Footer } from './Components/footer'

import { useRecoilValue } from "recoil"


function App() {
   const {bg,text}= useRecoilValue(ThemeSelector)
 
  return (
  <RecoilRoot>
      <BrowserRouter>
       <div className={` min-h-screen ${bg} ${text} transition-colors duration-300`}>
                        <div className="p-8"></div>
                   <Header/>
                   <NavBar/>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/counter' element={<Counter />}/>
          <Route path='/loginform' element={ <SimpleForm/>}/>
          <Route path='/refHook' element={<Inputref/>}/>
          <Route path='/previous-tracker' element={<PrevCounter/>}/>
           <Route path='/userprofile' element={<UserProfile/>}/>
            <Route path='/datafetcher' element={<DataFetcher/>}/>
             <Route path='/todo' element={<Todo/>}/>
          
        </Routes>
        <Footer/>
         </div>
      </BrowserRouter>
    </RecoilRoot>
  )
  


}

export default App
