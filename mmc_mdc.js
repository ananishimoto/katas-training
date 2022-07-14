// With 2 numbers, define the MMC between the two

function calculationsResult(number1, number2) {
  const multiplesNumber1 = [];
  const multiplesNumber2 = [];
  let i;

  const higherNumber = Math.max(number1, number2);

  for (i = 1; i <= higherNumber; i++) {
    multiplesNumber1.push(number1 * i);
    multiplesNumber2.push(number2 * i);
  }

  const mmc = multiplesNumber1.filter((multiple) => {
    return multiplesNumber2.includes(multiple);
  });

  console.log(`The MMC between ${number1} and ${number2} is ${mmc[0]}`);
}

calculationsResult(3, 9);
