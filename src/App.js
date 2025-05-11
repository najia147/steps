import React, { useState } from "react";

let message = ["Learn React", "Applied for a job", "Invest your new income"];

export default function App() {
  let [step, setStep] = useState(1);
  let [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
      setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>close</button>
      {isOpen && (
        <main className="flex flex-col items-center shadow-2xl w-[30%] h-[20%] m-auto mt-[10%] p-5">
          <div className="flex flex-row justify-around gap-x-32">
            <div
              className={`rounded-full w-[5%] h-[5%] ${
                step >= 1 ? "bg-amber-300" : ""
              }`}
            >
              1
            </div>
            <div
              className={`rounded-full w-[5%] h-[5%] ${
                step >= 2 ? "bg-amber-300" : ""
              }`}
            >
              2
            </div>
            <div
              className={`rounded-full w-[5%] h-[5%] ${
                step >= 3 ? "bg-amber-300" : ""
              }`}
            >
              3
            </div>
          </div>

          <div>
            <h1>
              Step {step}: {message[step - 1]}
            </h1>
          </div>

          <div className="flex space-x-50">
            <button
              className="rounded-2xl text-white font-semibold  bg-black cursor-pointerbg-purple-600 p-2 w-[80%]"
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
            <button
              className="rounded-2xl text-white font-semibold bg-black cursor-pointer p-2 w-[80%]"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </main>
      )}
    </>
  );
}
