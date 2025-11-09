import { useRef } from "react";
import { useEffect } from "react";

export function Inputref() {
  const inputref = useRef();
  const emailRef = useRef();

  function Focus() {
    emailRef.current.focus();
  }

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div className="bg-gray-700 text-white rounded-xl shadow-xl p-6 w-96 space-y-6">
      <h2 className="text-2xl font-bold text-center">Ref Input Demo</h2>

      <input
        type="text"
        placeholder="name"
        ref={inputref}
        className="w-full h-10 bg-gray-500 text-white text-base rounded-md px-5 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="email"
        ref={emailRef}
        className="w-full h-10 bg-gray-500 text-white text-base rounded-md px-5 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex justify-center">
        <button
          onClick={Focus}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition"
        >
          Focus on Email
        </button>
      </div>
    </div>
  );
}