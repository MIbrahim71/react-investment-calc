export function calculateInterest(
  { initAmount, annualInvestment, returns, duration },
  results
) {
  let total = parseInt(initAmount);
  for (let i = 0; i < parseInt(duration); i++) {
    total += parseInt(annualInvestment);
    total *= 1 + parseInt(returns) / 100;
    results.push(parseInt(total));
  }
}

export const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
