export function calculateInvestment(
  initAmount,
  annualInvestment,
  returns,
  duration
) {
  let total = initAmount;
  for (let i = 0; i < duration; i++) {
    total += annualInvestment;
    total *= 1 + returns / 100;
  }
}
