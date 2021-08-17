function isMultipleOfFive(number: number) {
  return number % 5 === 0;
}

function isMultipleOfThree(number: number) {
  return number % 3 === 0;
}

function isMultipleOfThreeAndFive(number: number) {
  return isMultipleOfThree(number) && isMultipleOfFive(number);
}

const fizzBuzz = (number: number) => {
  let out = "";
  if (isMultipleOfThree(number)) out += "Fizz";
  if (isMultipleOfFive(number)) out += "Buzz";
  return out || "" + number;
};

describe("FizzBuzz", () => {
  describe.each([
    [1, "1"],
    [2, "2"],
    [3, "Fizz"],
    [6, "Fizz"],
    [5, "Buzz"],
    [10, "Buzz"],
    [15, "FizzBuzz"],
    [30, "FizzBuzz"],
  ])("Given number %s", (input, expectedOutput) => {
    it(`should return ${expectedOutput} as string`, () => {
      let result = fizzBuzz(input);
      expect(result).toBe(expectedOutput);
    });
  });
});
