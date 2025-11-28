export function calcLtmYield(divs, price) {
  const sum = divs.reduce((a, b) => a + b, 0);
  return (sum / price) * 100;
}

console.log(calcLtmYield([10, 12], 250)); // демо
