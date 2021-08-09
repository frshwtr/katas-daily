const fizzBuzz = (number: number) => {
  let out: string = "";
  if (number % 3 === 0) out += "Fizz";
  if (number % 5 === 0) out += "Buzz";

  return out !== "" ? out : number.toString();
};

describe("fizzBuzz", () => {
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
  ])("Given a number %s", (input, expectedOutput) => {
    it(`should return ${expectedOutput} as a string`, () => {
      const result = fizzBuzz(input);
      expect(result).toBe(expectedOutput);
    });
  });
});
