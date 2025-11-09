import { Moon, Sun } from 'lucide-react';

export function ToggleTheme({darkMode, setDarkMode}) {
  function onToggle(){
    setDarkMode(prev => !prev)
  }
  
  return (
    <button 
      onClick={onToggle} 
      className={`p-2 rounded-full shadow transition-colors ${
        darkMode ? 'bg-gray-900 text-yellow-400' : 'bg-gray-200 text-gray-800'
      }`}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}