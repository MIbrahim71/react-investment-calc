import { useState } from "react";

export default function Output({
  initAmount,
  annualInvestment,
  returns,
  duration,
}) {
  const [finalAmount, setFinalAmount] = useState(0);

  const amounts = {
    "Investment Value": finalAmount,
    "Total Invested": initAmount + annualInvestment * duration,
    "Total Interest": finalAmount - (initAmount + annualInvestment * duration),
  };

  function calculateInterest() {
    let total = initAmount;
    for (let i = 0; i < duration; i++) {
      total += annualInvestment;
      total *= 1 + returns / 100;
    }

    setFinalAmount(total);
  }

  return (
    <div className="bg-blue-400 rounded text-white">
      <div>
        {Object.keys(amounts).map((amount, i) => {
          <div key={i} className="bg-blue-400 flex flex-col gap-4">
            <h2>{amount}</h2>
            <p>{amounts[amount]}</p>
          </div>;
        })}
      </div>
    </div>
  );
}
