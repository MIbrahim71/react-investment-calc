import { calculateInterest, formatter } from "../utils/investment";

export default function Output({ input }) {
  const results = calculateInterest(input);
  if (!results) return null;

  console.log("Results", results);
  const amounts = {
    "Investment Value": results,
    "Total Invested":
      input.initAmount + input.annualInvestment * input.duration,
    "Total Interest":
      results - (input.initAmount + input.annualInvestment * input.duration),
  };
  console.log(input);

  return (
    <div className="bg-blue-400 rounded-lg text-white flex flex-col gap-6 p-8  max-w-lg">
      {Object.keys(amounts).map((amount, amountIndex) => {
        return (
          <div
            key={amountIndex}
            className="flex flex-row justify-between items-center gap-8"
          >
            <h2 className="text-xl font-semibold sm:text-xl md:text-2xl ">
              {amount}
            </h2>
            <p>{formatter.format(amounts[amount].toFixed(2))}</p>
          </div>
        );
      })}
    </div>
  );
}
