import { useEffect, useState } from "react";
import { ToggleTheme } from "./Dark-mode-toggle";

export function SimpleForm() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showData, setShowData] = useState(false);
  const [submitData, setSubmitData] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name || !input.password || !input.email) {
      alert("please fill all the feilds");
      return;
    }
    setShowData(true);
    setSubmitData(input);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function toggledata() {
    setShowData(c => !c);
  }

  function handleClear() {
    setInput({ name: "", email: "", password: "" });
    setSubmitData("");
    setShowData(false);
  }

//   useEffect(() => {

//   const storeddata = localStorage.getItem("Theme");

  
//   if(storeddata){
//     const parsed = JSON.parse(storeddata);
 
//     setDarkMode(parsed);
   
//   } 
// }, []);
  



  const bgClass = darkMode ? "bg-gray-800" : "bg-gray-100";
  const textClass = darkMode ? "text-white" : "text-gray-900";
  const inputBg = darkMode ? "bg-gray-700" : "bg-white";
  const borderClass = darkMode ? "border-gray-600" : "border-gray-300";
  const labelClass = darkMode ? 'text-gray-200' : 'text-gray-900';

  return (
     <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center p-4 w-full">
  
    <div
      className={`rounded-lg border-2 ${borderClass} p-8 ${bgClass} ${textClass} shadow-xl transition-colors`}
    >
        <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Login Form</h2>
        <ToggleTheme darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <form onSubmit={handleSubmit}>

        <div className=" flex flex-col  items-center sm:grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 sm:items-center">
          <label className={`text-base sm:text-lg font-semibold ${labelClass}`}>
            Username
          </label>
          <input
            name="name"
            type="text"
            placeholder="enter name"
            className={`w-full h-10 sm:h-12 ${inputBg} ${textClass} rounded-md px-4 border 
            ${borderClass} focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
            value={input.name}
            onChange={handleChange}
          />
        </div>

        <div className=" flex flex-col  items-center sm:grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 sm:items-center">
          <label className={`text-base sm:text-lg font-semibold ${labelClass}`}>Email</label>
          <input
            name="email"
            type="text"
            placeholder="enter email"
            className={`w-full h-10 sm:h-12 ${inputBg} ${textClass} rounded-md px-4 border 
            ${borderClass} focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
            value={input.email}
            onChange={handleChange}
          />
        </div>
      
        <div className=" flex flex-col  items-center sm:grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-4 sm:items-center">
          <label className={`text-base sm:text-lg font-semibold ${labelClass}`}>
            Password
          </label>
          <input
            name="password"
            type="text"
            placeholder="enter password"
            className={`w-full h-10 sm:h-12 ${inputBg} ${textClass} rounded-md px-4 border 
            ${borderClass} focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all`}
            value={input.password}
            onChange={handleChange}
          />
        </div>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button 
            onClick={handleSubmit}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-md font-semibold shadow-md transition-colors"
          >
            Submit
          </button>
          {submitData && (
            <button
              onClick={handleClear}
             className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 rounded-md font-semibold shadow-md transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </form>
      {submitData && (
        <div className="mt-6 text-center">
          <button
            onClick={toggledata}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium shadow-md transition-colors"
          >
            {showData ? "🙈 Hide Data" : "👀 Show Data"}
          </button>
        </div>
      )}
         {submitData && showData && (
        <div className={`mt-6 p-4 sm:p-6 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded-lg shadow-lg space-y-2 sm:space-y-3 border ${borderClass}`}>
          <p className="text-base sm:text-lg break-words">
            <strong>Username:</strong> {submitData.name}
          </p>
          <p className="text-base sm:text-lg break-words">
            <strong>Email:</strong> {submitData.email}
          </p>
          <p className="text-base sm:text-lg break-words">
            <strong>Password:</strong> {submitData.password}
          </p>
        </div>
      )}
    </div>
    </div>
  );
}
