// Демонстрационный пример

function calculateIndex(companies) {
  let totalWeight = 0;
  let index = 0;

  companies.forEach(c => {
    const weight = Math.log(1 + c.volume);
    const contribution = (c.price * weight);
    index += contribution;
    totalWeight += weight;
  });

  return index / totalWeight;
}

console.log("Demo index value:", calculateIndex([
  { price: 100, volume: 2000000 },
  { price: 250, volume: 800000 },
]));
