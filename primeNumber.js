function primeNumbers(number) {
  const results = [];
  let index = 0;

  if (number < 0) {
    console.log("Please provide a positive number");
    return;
  }

  for (index = 0; index <= number; index++) {
    if (number % index === 0) {
      results.push(index);
    }
  }

  if (results.length !== 2) {
    console.log(`${number} is not a prime number`);
  } else {
    console.log(`${number} is a prime number`);
  }
}

primeNumbers(113);

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
}
