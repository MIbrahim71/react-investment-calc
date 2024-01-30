export function calculateInterest(
  { initAmount, annualInvestment, returns, duration },
  results
) {
  let total = initAmount;
  for (let i = 0; i < duration; i++) {
    total += annualInvestment;
    total *= 1 + returns / 100;
  }

  results = total;
}
