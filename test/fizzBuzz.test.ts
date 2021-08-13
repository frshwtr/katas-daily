const isMultipleOfThree = (number: number) => number % 3 === 0;

const isMultipleOfFive = (number: number) => number % 5 === 0;

const isMultipleOfThreeAndFive = (number: number) =>
  isMultipleOfThree(number) && isMultipleOfFive(number);

const fizzBuzz = (number: number) => {
  if (isMultipleOfThreeAndFive(number)) return "FizzBuzz";
  if (isMultipleOfThree(number)) return "Fizz";
  if (isMultipleOfFive(number)) return "Buzz";
  return "" + number;
};

describe("FizzFizz", () => {
  describe.each([
    [1, "1"],
    [2, "2"],
    [3, "Fizz"],
    [6, "Fizz"],
    [9, "Fizz"],
    [5, "Buzz"],
    [10, "Buzz"],
    [15, "FizzBuzz"],
    [30, "FizzBuzz"],
  ])("Given number %s", (input, expectedOutput) => {
    it(`should return ${expectedOutput} as a string`, () => {
      const result = fizzBuzz(input);
      expect(result).toBe(expectedOutput);
    });
  });
});
