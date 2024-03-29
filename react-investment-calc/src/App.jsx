import { useState } from "react";
import Header from "./components/Header";
import Output from "./components/Output";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initAmount: 1000,
    annualInvestment: 1000,
    returns: 10,
    duration: 10,
  });

  // Upon typing in the input, the values will be visible to the user
  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main className="min-h-screen flex flex-col gap-8 bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base items-center">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Output input={userInput} />
    </main>
  );
}

export default App;
