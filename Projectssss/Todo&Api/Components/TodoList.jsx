import { useRef } from "react";
import { useTodo } from "../CoustomHook/UseTodo";
import { CheckCircle, TrashIcon } from "lucide-react";

export const Todo = () => {
  const {
    Toggletodo,
    addTodo,
    deleteTodo,
    setFilter,
    todos,
    filter,
    ActiveCount,
    totalCount,
    CompletedCount,
  } = useTodo();
  const inputref = useRef();

  const handleAddTodo = () => {
    addTodo(inputref.current.value);
    inputref.current.value = "";
  };

  const inputButtonStyle =
  "h-12 px-6   bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
  const filterButtonStyle =
   `flex-1 px-4 py-2.5 rounded-lg font-medium transition-all ${
                  filter
                    ? "bg-white text-purple-600 shadow-md"
                    : "text-gray-600 hover:text-purple-600"
                }`
  const TodoStyle =
    "flex flex-col sm:flex-row mt-3 px-3 py-2 bg-blue-50 rounded-lg w-full sm:w-[630px]  border-b-2 border-purple-400 ";

  return (

    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex items-center justify-center p-4 w-full">
     
    <div>
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-2">
            
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              My Tasks
            </h1>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Stay organized and productive
          </p>
        </div>

    <div className="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-blue-100 w-full max-w-[700px] px-6 rounded-lg border-1 border-purple-200 ">
      <div className="w-full max-w-[700px]">
        <div className="flex flex-wrap items-center gap-3 justify-center w-full mb-6">
          <input
            type="text"
            ref={inputref}
            className="flex-1 h-12 px-4 rounded-xl border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
          />
          <button onClick={handleAddTodo} className={inputButtonStyle}>
            Add+
          </button>
        </div>

        <div className=" gap-3 mb-3 flex justify-around  items-center p-3 rounded-md shadow-md shadow-blue-500 hover:shadow-blue-600">
          <button
            onClick={() => {
              setFilter("all");
            }}
            className={filterButtonStyle}
          >
            {" "}
            All
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    filter === 'all'
                      ? "bg-purple-100 text-purple-600"
                      : "bg-gray-200 text-gray-600"
                  }`}>
              {totalCount}
            </span>
          </button>
          <button
            onClick={() => {
              setFilter("active");
            }}
            className={filterButtonStyle}
          >
            Active
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    filter === 'active'
                      ? "bg-purple-100 text-purple-600"
                      : "bg-gray-200 text-gray-600"
                  }`}>
              {ActiveCount}
            </span>
          </button>
          <button
            onClick={() => {
              setFilter("completed");
            }}
            className={filterButtonStyle}
          >
            Completed
            <span className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                    filter === 'completed'
                      ? "bg-purple-100 text-purple-600"
                      : "bg-gray-200 text-gray-600"
                  }`}>
              {CompletedCount}
            </span>
          </button>
        </div>
        <div className="w-full flex flex-col items-center max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-400 scrollbar-track-purple-100 ">
          {todos.length === 0 ? (
            <div className="mt-6 w-full bg-purple-50 border-l-4 border-purple-400 p-6 rounded-md shadow-md flex items-center gap-4 ">
              <span className="text-yellow-600 text-4xl">📝</span>
              <p className="text-yellow-800 text-lg italic">
                {filter !== "all"
                  ? "No todos in this category. Time to get productive!"
                  : "Your notepad is empty. Add something to get started!"}
              </p>
            </div>
          ) : (
            todos.map((todo) => (
              <div key={todo.id} className={TodoStyle}>
                <span
                  onClick={() => {
                    Toggletodo(todo.id);
                  }}
                  className={`self-center  rounded-full cursor-pointer ${
                    todo.completed
                      ? "bg-green-300 hover:bg-green-400"
                      : "hover:bg-green-200"
                  }`}
                >
                  <CheckCircle
                    className={`${
                      todo.completed
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-blue-600 hover:text-white bg-white-200 text-blue-500"
                    } rounded-full`}
                  />
                </span>
                <p
                  className={`grow px-3 py-2 text-lg sm:text-xl text-gray-900 ${
                    todo.completed ? "line-through text-gray-500" : "text-gray-900"
                  }`}
                >
                  {todo.title}
                </p>
                <span
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                  className="self-center p-2 rounded-full cursor-pointer transition hover:bg-purple-200 cursor-pointer"
                >
                  <TrashIcon className="text-purple-600 hover:text-purple-700 transition" />
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};
