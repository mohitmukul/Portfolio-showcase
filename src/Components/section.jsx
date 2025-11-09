import { useRecoilValue } from "recoil";
import { acticeSections, ThemeSelector } from "../States/Atoms/ThemeAtom";
import { useNavigate } from "react-router-dom";
import CounterImg from "../PngFiles/Counter.png";
import FormHandler from "../PngFiles/SimpleForm.png";
import inputref from "../PngFiles/inputRef.png";
import PrevTracker from "../PngFiles/PreviousCount.png";
import Dashboard from "../PngFiles/DashBoard.png";
import todo from "../PngFiles/todoList.png";
import apicall from "../PngFiles/Apicall.png";
import recoilImg from '../PngFiles/recoil.png'


export const Section = () => {
  const activesec = useRecoilValue(acticeSections);
  const { accent, subtext, card, Cardborder } = useRecoilValue(ThemeSelector);
  const navigate = useNavigate();

  

  return (
    <>
      {(activesec === "all" || activesec === "ReactHooks") && (
        <section className={`${card} rounded-lg shadow-xl p-8 transition-all`}>
          <h2
            className={`text-3xl font-bold mb-6 ${accent} flex items-center gap-3`}
          >
            <span>⚛️</span>
            <span>React Hooks Mastery</span>
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div
              className={`border ${Cardborder} rounded-lg p-5 hover:shadow-lg transition-shadow`}
              onClick={() => {
                navigate("/counter");
              }}
            >
              <h3 className="font-semibold text-lg mb-2">Counter App</h3>
              <p className={`text-sm ${subtext} mb-4`}>
                useState for state management
              </p>
              <div className="mb-4 rounded overflow-hidden border border-gray-300">
                <img
                  src={CounterImg}
                  alt="Counter App Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition"
                />
              </div>
            </div>

            <div
              className={`border ${Cardborder} rounded-lg p-5 hover:shadow-lg transition-shadow`}
              onClick={() => {
                navigate("/loginform");
              }}
            >
              <h3 className="font-semicold text-lg mb-2">Form Handler</h3>
              <p className={`text-sm ${subtext} mb-4`}>
                Multiple useState + controlled components
              </p>
              <div className="mb-4 rounded overflow-hidden border border-gray-300">
                <img
                  src={FormHandler}
                  alt="Form Handler Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-all"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {(activesec === "all" || activesec === "CustomHooks") && (
        <section className={`${card} rounded-lg shadow-xl p-8 transition-all`}>
          <h2
            className={`text-3xl font-bold mb-6 ${accent} flex items-center gap-3`}
          >
            <span>⚛️</span>
            <span>Coustom Hooks & UseRef</span>
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div
              className={`border ${Cardborder} rounded-lg p-5 hover:shadow-lg transition-shadow`}
              onClick={() => {
                navigate("/refHook");
              }}
            >
              <h3 className="font-semibold text-lg mb-2">
                Focus Input Manager
              </h3>
              <p className={`text-sm ${subtext} mb-4`}>
                useRef for DOM manipulation
              </p>
              <div className="mb-4 rounded overflow-hidden border border-gray-300">
                <img
                  src={inputref}
                  alt="Counter App Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition"
                />
              </div>
            </div>

            <div
              className={`border ${Cardborder} rounded-lg p-5 hover:shadow-lg transition-shadow`}
              onClick={() => {
                navigate("/previous-tracker");
              }}
            >
              <h3 className="font-semicold text-lg mb-2">
                Previous Value Traker
              </h3>
              <p className={`text-sm ${subtext} mb-4`}>
                useRef for DOM manupulation + useEffect + CoustomHook(usePrev)
              </p>
              <div className="mb-4 rounded overflow-hidden border border-gray-300">
                <img
                  src={PrevTracker}
                  alt="Form Handler Preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-all"
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {(activesec === "all" || activesec === "ApiCall") && (
        <section className={`${card} rounded-lg shadow-xl p-8 transition-all`}>
          <h2
            className={`text-3xl font-bold mb-6 ${accent} flex items-center gap-3`}
          >
            <span>⚛️</span>
            <span>API calling & DataFetching</span>
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6`}>
            <div
              className={`border ${Cardborder} rounded-lg p-5 hover:shadow-lg transition-shadow`}
              onClick={() => {
                navigate("/datafetcher");
              }}
            >
              <h3 className={`font-semibold text-lg mb-2`}>
                React Data Fetching Component
              </h3>
              <p className={`${subtext} text-sm mb-4`}>
                Fetching and Displaying Data from API
              </p>
              <div className="mb-4 overflow-hidden border border-gray-300">
                <img
                  src={apicall}
                  alt="preview"
                  className={`w-full object-cover hover:scale-105 h-48 transition-all`}
                />
              </div>
            </div>
            <div
              className={`border ${Cardborder} rounded-lg p-5 hover:shadow-lg transition-shadow`}
              onClick={() => {
                navigate("/todo");
              }}
            >
              <h3 className={`font-semibold text-lg mb-2`}>Todo App</h3>
              <p className={`${subtext} text-sm mb-4`}>
                Task Management with Filtering and State Abstraction
              </p>
              <div className="mb-4 overflow-hidden border border-gray-300">
                <img
                  src={todo}
                  alt="todo preview"
                  className={`w-full object-cover hover:scale-105 h-48 transition-all`}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {(activesec === "all" || activesec === "ContextApi") && (
        <section className={`${card} rounded-lg shadow-xl p-8 transition-all`}>
          <h2
            className={`text-3xl font-bold mb-6 ${accent} flex items-center gap-3`}
          >
            <span>🌐</span>
            <span>Context API And Global State</span>
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6`}>
            <div
              className={`border ${Cardborder} rounded-lg p-5 hover:shadow-lg transition-shadow`}
              onClick={() => {
                navigate("/previous-tracker");
              }}
            >
              <h3 className="font-semibold text-lg mb-2">
                Theme + User Context
              </h3>
              <p className={`text-sm ${subtext} mb-4`}>
                Share theme state across components without prop drilling
              </p>
              <div className="mb-4 overflow-hidden border border-gray-300">
                <img
                  src={Dashboard}
                  alt="Home page preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-all"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {(activesec === "all" || activesec === "Recoil") && (
        <section className={`${card} rounded-lg shadow-xl p-8 transition-all`}>
          <h2
            className={`${accent} text-3xl flex items-center font-bold mb-6 gap-3`}
          >
            <span>⚛️</span>
            <span>Recoil</span>
          </h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-6`}>
            <div
              className={`border ${Cardborder} rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow`}
             
            >
              <h3 className={`font-semibold text-lg mb-2`}>
                Counter App (Live!)
              </h3>
              <p className={`text-sm ${subtext} mb-4`}>
                Full-featured counter with atoms, selectors, and deployment
              </p>
              <div className="m-4 flex flex-col items-center overflow-hidden border border-grya-300">
                <img
                  src={recoilImg}
                  alt="recoil app preview"
                  className="w-full h-48 object-cover hover:scale-105 transition-all"
                />
                <a 
                  href="https://recoil-counter-app.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 bg-blue-600  rounded-lg hover:bg-blue-700 transition m-1`}
                >
                  🚀 View Live Project
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
