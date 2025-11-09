import { useEffect, useState } from "react"

export const useFetch=(url)=>{

    const [Data,setData]=useState({})
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)

    const getData=async()=>{
        try{
        setLoading(true)
        const response= await fetch(url)
    const json= await response.json()

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    setData(json)
    setLoading(false)
    }
    catch(e){
        setError(e)
        setLoading(false);
    }
    }

    useEffect(()=>{
        getData();
    },[url]) // adding a url in the dependency array so if the post changes then it refetches data from backend

    return {
        Data,loading,error
    };
    


}