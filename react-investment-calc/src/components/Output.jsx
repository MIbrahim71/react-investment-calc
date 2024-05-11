import { calculateInterest, formatter } from "../utils/investment";

export default function Output({ input }) {
  const results = calculateInterest(input);
  if (!results) return null;

  console.log("Results", results);
  const amounts = {
    "Investment Value": results,
    "Total Invested":
      input.initAmount + input.annualInvestment * input.duration,
    Return:
      results - (input.initAmount + input.annualInvestment * input.duration),
  };
  console.log(input);

  return (
    <div className="bg-stone-500 rounded-lg text-white flex flex-col gap-6 p-8">
      {Object.keys(amounts).map((amount, amountIndex) => {
        return (
          <div
            key={amountIndex}
            className="flex flex-row justify-between items-center gap-8 md:p-2"
          >
            <h2 className="text-xl  sm:text-xl md:text-3xl ">{amount}</h2>
            <p className="text-xl sm:text-3xl font-semibold">
              {formatter.format(amounts[amount].toFixed(2))}
            </p>
          </div>
        );
      })}
    </div>
  );
}
