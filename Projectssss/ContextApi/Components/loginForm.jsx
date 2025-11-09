
import { useState } from "react";
import { useUser } from "../Context/User-Context";


export function LoginForm(){


    const {user,login}=useUser();
    const[data,setData]=useState({
        name:'',
        email:'',
        password:''
    })
    
    if(user.isLoggedIn){
        return null;

        }

        function handleSubmit(e){

            e.preventDefault();
            if(data.email||data.name||data.password){
                login(data)
            }

        }
        function handleChange(e){

            const{name,value}=e.target;

            setData((prev)=>({
                ...prev,
                [name]:value
            })
        
            
            )
        }


    return <div className=" max-w-md mx-auto mt-10 p-6 bg-gray-400 rounded-lg shadow-xl ">
        <form onSubmit={handleSubmit}>
            <div className="space-y-4">
        <div className="flex justify-center items-center grid grid-cols-[150px_1fr] gap-3"><label className="font-bold">Username</label>
        <input type="text"name="name" placeholder="name" value={data.name} onChange={handleChange} 
        className="w-full h-10 text-white text-base px-4 py-10 text-center mb-3 shadow-lg"/>
        </div>
         <div className="flex justify-center items-center grid grid-cols-[150px_1fr] gap-3"><label  className="font-bold"  >Email</label>
        <input type="text"name="email" placeholder="email" value={data.email} onChange={handleChange} 
        className="w-full h-10 text-white text-base px-4 py-10 text-center mb-3 shadow-lg"/>
        </div>
         <div className="flex justify-center items-center grid grid-cols-[150px_1fr] gap-3"><label  className="font-bold" >Password</label>
        <input type="text"name="password" placeholder="password" value={data.password} onChange={handleChange} 
        className="w-full h-10 text-white text-base px-4 py-10 text-center mb-3 shadow-lg"/>

        </div>
        <div className="flex justify-center space-x-4">
            <button type="submit" className="text-white bg-gray-800 px-5 py-2 rounded-lg">Login</button>
        </div>
        </div>
        </form>
    </div>
}