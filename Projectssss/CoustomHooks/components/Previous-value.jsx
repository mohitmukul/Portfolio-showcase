import { useState } from "react";
import { usePrev } from "../CoustomH/UsePrev";

export function PrevCounter() {
  const [count, setCount] = useState(0);
  const value = usePrev(count);

  function increaseCount() {
    setCount((c) => c + 1);
  }

  return (
    <div className="bg-gray-700 text-white rounded-xl shadow-xl p-6 w-80 space-y-6">
      <h2 className="text-3xl font-bold text-center">Counter</h2>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Current Count:</span>
          <span className="text-2xl font-bold">{count}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Previous Count:</span>
          <span className="text-2xl font-bold">{value}</span>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={increaseCount}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition"
        >
          Click
        </button>
      </div>
    </div>
  );
}