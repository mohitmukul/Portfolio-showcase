import { useRecoilState, useRecoilValue } from "recoil"
import { Themeatom, ThemeSelector } from "../States/Atoms/ThemeAtom"


export const Header=()=>{
    const [Theme,setTheme]=useRecoilState(Themeatom)

    const {accent,subtext}=useRecoilValue(ThemeSelector)

    const ToggleTheme=()=>{

        setTheme(prev=>!prev)
        
    }

return <header className="max-w-6xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h1 className={`text-4xl md:text-5xl font-bold ${accent}`}>
                My React Portfolio
              </h1>
              <p className={`mt-2 ${subtext}`}>
                Mohit | Self-taught Developer | BA Graduate
              </p>
              <p className={`text-sm ${subtext} mt-1`}>
                Showcasing React • Recoil • Modern State Management
              </p>
            </div>
            
        
            <button 
              onClick={ToggleTheme}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg flex items-center gap-2"
            >
              <span className="text-xl">{Theme ? '🌙' : '☀️'}</span>
              <span>{Theme  ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>
        </header>
}

