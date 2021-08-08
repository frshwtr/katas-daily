const fizzBuzz = (number: number) => {
  let out: string = "";
  if (number % 3 === 0) {
    out += "Fizz";
  }
  if (number % 5 === 0) {
    out += "Buzz";
  }
  if (out != "") {
    return out;
  }
  return number.toString();
};

describe("Fizz Buzz", () => {
  describe.each([
    [1, "1"],
    [2, "2"],
    [3, "Fizz"],
    [4, "4"],
    [5, "Buzz"],
    [6, "Fizz"],
    [10, "Buzz"],
    [15, "FizzBuzz"],
    [30, "FizzBuzz"],
  ])(`Given a number %s `, (input, expectedOutput) => {
    it(`should return the number ${expectedOutput} as a string`, () => {
      const result = fizzBuzz(input);

      expect(result).toBe(expectedOutput);
    });
  });
});
