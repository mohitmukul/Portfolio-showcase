import { useUser } from '../Context/User-Context';
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";

export function Header() {
  const { user, Logout } = useUser();
   const { theme, ToggleTheme } = useContext(ThemeContext);
  

  return (
    <header className={`p-4 flex justify-between  w-full  ${
        theme ? "bg-gray-400 text-black" : "bg-gray-900 text-white"
      }`}>
      <h1 className={`text-3xl font-bold ${theme?'text-gray-900':'text-white'}`}>My App</h1>
      <div className="flex items-center gap-4">
    
        {user.isLoggedIn && (
          <>
            <span className={`hidden sm:inline  ${theme?'text-gray-900':'text-white'}text-xl`}>Welcome, {user.name}</span>
            <button
              onClick={Logout}
              className="px-3 py-1 bg-red-500 text-white rounded shadow shadow-lg "
            >
              Logout
            </button>
          </>
        )}
          <button
        onClick={ToggleTheme}
        className={`rounded-full px-4 py-2 border-2 ${theme?'border-white bg-gray-900':'border-blue-300 bg-gray-900'}`}
      >
        {theme ? <MoonIcon className="text-blue-300" /> : <SunIcon className='text-yellow-400' />}
      </button>
      </div>
    </header>
  );
};

