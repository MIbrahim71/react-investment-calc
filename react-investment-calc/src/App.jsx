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

  function handleChange() {
    setUserInput((prev) => {
      [...userInput, prev];
    });
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Header />
      <UserInput input={userInput} onChange={handleChange} />
      <Output />
    </main>
  );
}

export default App;
