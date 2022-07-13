function primeNumbers(number) {
  if (number <= 0) {
    console.log("Please provide a positive number");
    return;
  } else {
    for (i = 0; i < number; i++) {
      if (number % i === 0 && i != 1) {
        console.log(`number ${number} is not a prime`);
        return;
      }
    }
    console.log(`number ${number} is a prime`);
  }
}
primeNumbers(113);

const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
}
