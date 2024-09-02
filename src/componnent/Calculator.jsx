import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  // Handle number and operator clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle clear button
  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  // Handle calculation
  const handleCalculate = () => {
    try {
      setResult(eval(input)); // Evaluate the input string
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <div className="text-right mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right text-3xl p-2 border border-gray-300 rounded"
          />
          <div className="text-3xl text-gray-600 mt-2">
            {result !== null ? `= ${result}` : ""}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Numbers */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num.toString())}
              className="bg-gray-100 p-4 text-xl font-bold rounded shadow"
            >
              {num}
            </button>
          ))}
          {/* Operators */}
          {["+", "-", "*", "/"].map((operator) => (
            <button
              key={operator}
              onClick={() => handleClick(operator)}
              className="bg-yellow-100 p-4 text-xl font-bold rounded shadow"
            >
              {operator}
            </button>
          ))}
          {/* Special buttons */}
          <button
            onClick={handleClear}
            className="bg-blue-500 p-1 text-xl font-bold rounded shadow col-span-1"
          >
            C
          </button>
          <button
            onClick={handleCalculate}
            className="bg-blue-500 p-1 text-xl font-bold rounded shadow col-span-1"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
