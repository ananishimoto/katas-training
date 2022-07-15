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

// calculationsResult(3, 5);

// With N parameters numbers, define the MMC between them

function mmcResult(...numbers) {
  const allNumbers = [].slice.call(numbers);
  let i = 1;
  let arrayIndex = 0;
  let mmc;

  const higherNumber = allNumbers.sort(function (a, b) {
    return b - a;
  });

  //   console.log(higherNumber);

  const arrayAllMultiples = higherNumber.map((number) => {
    // console.log("which number", number);
    const arrayResults = [];
    for (i = 1; i <= higherNumber[0] ** 2; i++) {
      arrayResults.push(number * i);
    }
    return arrayResults;
  });

  //   console.log("all results", arrayAllMultiples);
  for (
    arrayIndex = 0;
    arrayIndex < arrayAllMultiples.length - 1;
    arrayIndex++
  ) {
    // const arrayFiltered = arrayAllMultiples[arrayIndex].filter((number) => {
    //   return arrayAllMultiples[arrayIndex + 1].includes(number);
    // });
    // console.log(arrayFiltered);
    mmc = arrayAllMultiples.reduce((a, b) => a.filter((c) => b.includes(c)));
  }

  console.log(`The MMC between ${numbers} is ${mmc[0]}`);

  //   const mmc = arrayAllMultiples.filter((array) => {
  //     console.log("test", array);
  //     const nextArray = array++;
  //     array.filter((number) => {
  //       return nextArray.includes(number);
  //     });
  //   });
}

mmcResult(6, 3, 8, 10);
