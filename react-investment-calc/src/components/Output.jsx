import { calculateInterest } from "../utils/investment";

export default function Output({ input }) {
  // const amounts = {
  //   "Investment Value": finalAmount,
  //   "Total Invested": initAmount + annualInvestment * duration,
  //   "Total Interest": finalAmount - (initAmount + annualInvestment * duration),
  // };

  const results = "";
  calculateInterest(input, results);

  return (
    <div className="bg-blue-400 rounded text-white flex flex-col gap-6 p-4">
      {/* {Object.keys(amounts).map((amount, amountIndex) => {
        return (
          <div key={amountIndex} className="flex items-center gap-2">
            <h2 className="text-lg font-semibold sm:text-xl md:text-2xl ">
              {amount}
            </h2>
            <p>${amounts[amount].toFixed(2)}</p>
          </div>
        );
      })}
      <button
        className="px-4 py-2 text-center border-2 border-solid border-white font-bold text-white rounded"
        onClick={reset}
      >
        Reset
      </button> */}

      <h1>{results}</h1>
    </div>
  );
}
