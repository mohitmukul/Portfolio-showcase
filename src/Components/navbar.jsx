import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { acticeSections } from "../States/Atoms/ThemeAtom"
import { ThemeSelector } from "../States/Atoms/ThemeAtom"

export const NavBar=()=>{

    const NavButton=[
        {id:'all',label:'All'},
        {id:'ReactHooks',label:'React-Hooks'},
        {id:'CustomHooks',label:'Custom-Hooks'},
        {id:'ContextApi',label:'Context-Api'},
        {id:'ApiCall',label:'API-Calling'},
        {id:'Recoil',label:'Recoil'}
    ]

    const {card,text}=useRecoilValue(ThemeSelector);
    const [section,setSection]=useRecoilState(acticeSections);


    return <nav className="max-w-6xl mx-auto mb-8">
          <div className="flex gap-3 flex-wrap justify-center">
            {NavButton.map(button => (
              <button 
                key={button.id}
                onClick={() => setSection(button.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  section === button.id 
                    ? 'bg-blue-600 text-white shadow-lg scale-105' 
                    : `${card} ${text} hover:scale-105 shadow`
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
        </nav>

    

}