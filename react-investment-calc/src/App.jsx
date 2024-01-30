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

  // const amounts = {
  //   "Investment Value": finalAmount,
  //   "Total Invested": initAmount + annualInvestment * duration,
  //   "Total Interest": finalAmount - (initAmount + annualInvestment * duration),
  // };

  // Upon typing in the input, the values will be visible to the user
  function handleChange(inputIdentifier, newValue) {
    console.log("CHANGE");
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Output
        initAmount={userInput.initAmount}
        annualInvestment={userInput.annualInvestment}
        returns={userInput.returns}
        duration={userInput.duration}
      />
    </main>
  );
}

export default App;
