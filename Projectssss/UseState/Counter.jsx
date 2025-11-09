import { useState } from "react";

export function Counter(){

    const [count,setCount]=useState(0);

    return (
   <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center p-4 w-full">
  <div className="flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-br from-purple-200 via-blue-100 to-pink-300  rounded-lg shadow-md w-74 sm:w-100">
    <p className="  text-3xl sm:text-5xl font-bold text-gray-800">{count}</p>

    <div className="flex gap-2 sm:gap-5">
      <button
        onClick={() => setCount(c => c + 1)}
        className="sm:px-6 px-4 py-2 bg-green-600 text-white sm:text-xl rounded hover:bg-green-700 transition"
      >
        Increase
      </button>

      <button
        onClick={() => setCount(c => c - 1)}
        className="sm:px-6 px-4 py-2 bg-red-600 text-white sm:text-xl rounded hover:bg-red-700 transition"
      >
        Decrease
      </button>
    </div>

    <button
      onClick={() => setCount(0)}
      className="sm:px-6 px-4 py-2 bg-blue-600 text-white sm:text-xl rounded hover:bg-blue-700 transition"
    >
      Reset
    </button>

    <p className="font-bold sm:font-semibold text-xl sm:text-md ">Basic Counter</p>
  </div>
  </div>

);
}