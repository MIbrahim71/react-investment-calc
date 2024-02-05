export function calculateInterest(
  { initAmount, annualInvestment, duration, returns },
  results
) {
  let total = parseInt(initAmount);

  for (let i = 0; i < parseInt(duration); i++) {
    total += parseInt(annualInvestment);
    total *= 1 + parseInt(returns) / 100;
    results = total;
  }
}
