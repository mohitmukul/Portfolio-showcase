import { useRecoilValue } from "recoil"
import { ThemeSelector } from "../States/Atoms/ThemeAtom"

export const Footer=()=>{
    const{text,subtext,accent}=useRecoilValue(ThemeSelector)

    return <footer className="max-w-6xl mx-auto mt-16 text-center">
        <div className="border-t border-gray-700 p-8">
            <p className={`text-lg font-semibold ${text} mb-4`}>
                🚀 Ready for Production | 💼 Open for Opportunities
            </p>
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://github.com/mohitmukul"
                className={`${accent} hover:underline font-medium`}> GitHub Profile</a>
                <a href="https://recoil-counter-app.vercel.app/" 
                className={`${accent} hover:underline font-medium`}>Live Projects</a>
            </div>
        <p className={`text-sm ${subtext}`}>
             Built with React • Recoil • Tailwind CSS • Deployed on Vercel

        </p>

        </div>
    </footer>

}