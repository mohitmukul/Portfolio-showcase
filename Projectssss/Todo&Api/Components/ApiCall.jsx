import { Loader, Loader2, Loader2Icon, LoaderCircle } from "lucide-react";
import { useFetch } from "../CoustomHook/UseFetch";
import { useState } from "react";

export function DataFetcher(){
    const [post,setPost]=useState(1)

    const {Data,loading,error}=useFetch(`https://jsonplaceholder.typicode.com/users/${post}`)

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center p-4 w-full">
    <div  className="flex flex-col items-center justify-center sm:w-[400px] mt-6 p-6 rounded-lg shadow-md bg-gray-600 border border-white">

        {error?(<p className="text-red text-xl bg-red-200">Error:{error.message}</p>):
        (loading?(<div className="text-3xl">wait....</div>):(

            <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-lg border border-purple-300">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">🧑🏻</span>
                    <span className="font-bold text-2xl text-gray-800">User Profile</span>
                </div>
                <div className="space-y-3 text-base text-gray-800">
                <div className="flex justify-between">
                    <span className="font-bold ">Id:</span>
                    <span className=" ">{Data.id}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="font-bold">Name:</span>
                    <span className=" ">{Data.name}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="font-bold ">Email:</span>
                    <span className=" ">{Data.email}</span>
                </div>
                 <div className="flex justify-between">
                    <span className="font-bold ">UserName:</span>
                    <span className="">{Data.username}</span>
                </div>
                </div>
                <div className=" flex justify-between gap-4 mt-6">
                    <button
                    onClick={()=>{post>1&& setPost(c=>c-1)}}
                    disabled={Data.id <= 1}
                     className="px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed rounded-lg"> ← Previous</button>
                    <button 
                    onClick={()=>{post<=9 &&setPost(c=>c+1)}}
                    disabled={Data.id >=10}
                     className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow transition">
                        Next → 
                    </button>
                </div>
                


            </div>
            
          
        ))}
        
    </div>
    </div>
    )
    
}