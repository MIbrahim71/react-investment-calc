import { calculateInterest } from "../utils/investment";

export default function Output({ input }) {
  const formatter = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const results = "";
  const finalAmount = calculateInterest(input, results);

  console.log(finalAmount);

  const amounts = {
    "Investment Value": finalAmount,
    "Total Invested":
      parseInt(input.initAmount) +
      parseInt(input.annualInvestment) * parseInt(input.duration),
    "Total Interest":
      finalAmount -
      (parseInt(input.initAmount) +
        parseInt(input.annualInvestment) * parseInt(input.duration)),
  };

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
      })} */}
      {/* <button
        className="px-4 py-2 text-center border-2 border-solid border-white font-bold text-white rounded"
        onClick={reset}
      >
        Reset
      </button> */}

      <h1>{formatter.format(finalAmount)}</h1>
    </div>
  );
}
