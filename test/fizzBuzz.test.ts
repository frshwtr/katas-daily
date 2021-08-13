const isMultipleOfFive = (number: number): boolean => number % 5 === 0;

const isMultipleOfThree = (number: number): boolean => number % 3 === 0;

const fizzBuzz = (number: number): string => {
    let out: string = '';
    if (isMultipleOfThree(number)) out += 'Fizz'
    if (isMultipleOfFive(number)) out += 'Buzz'
    return out || '' + number
};

describe('FizzBuzz', () => {
    describe.each([[1, '1'], [2, '2'], [3, 'Fizz'], [6, 'Fizz'], [5, 'Buzz'], [10, 'Buzz'], [15, 'FizzBuzz'], [30, 'FizzBuzz']])('Given number %s', (input, expectedOutput) => {
        it(`should return ${expectedOutput} as a string`, () => {
            const result = fizzBuzz(input);
            expect(result).toBe(expectedOutput);
        })
    })
});