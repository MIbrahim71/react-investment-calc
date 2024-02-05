export function calculateInterest({
  initAmount,
  annualInvestment,
  duration,
  returns,
}) {
  let investmentValue = initAmount;
  const rate = returns / 100;

  for (let i = 0; i < duration; i++) {
    investmentValue += annualInvestment;
    investmentValue *= 1 + rate;
  }
  return +investmentValue.toFixed(2);
}

export const formatter = new Intl.NumberFormat("en-UK", {
  style: "currency",
  currency: "GBP",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
