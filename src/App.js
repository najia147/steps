import React, { useState } from "react";

const messages = [
  "Understand JSX and component structure",
  "Build your first interactive component",
  "Use props and state to manage data",
];

export default function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep((s) => s + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <main className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full space-y-6">
        {/* Step indicators */}
        <div className="flex justify-between items-center">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-sm ${
                step >= num ? "bg-gray-900" : "bg-gray-300"
              }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Message */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700">
            Step {step}: {messages[step - 1]}
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={step === 1}
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              step === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={step === 3}
            className={`px-4 py-2 rounded-lg text-white font-medium transition ${
              step === 3
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
