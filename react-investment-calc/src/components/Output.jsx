import { useState } from "react";

export default function Output({ initAmount, annualInvestment, returns, duration }) {
  const [finalAmount, setFinalAmount] = useState(0)


  const amounts = {
    'Investment Value': initAmount * duration,
    'Total Invested': initAmount + (annualInvestment * duration),
    'Total Interest': 
  };


  function calculateInterest() {
    let total = initAmount
    for (let i =0; i < duration; i++) {
      total += annualInvestment;
      total *= 1 + (returns/100)
    }

    setFinalAmount(total)
  }

  return <div></div>;
}
