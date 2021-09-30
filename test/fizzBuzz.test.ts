enum FizzBuzz {
    FIZZ = 'Fizz',
    BUZZ = 'Buzz'
}

const fizzBuzz = (number: number) => {
    let result = ''
    if(isMultipleOfThree(number))
        result += FizzBuzz.FIZZ
    if(isMultipleOfFive(number)) result += FizzBuzz.BUZZ
    return result || '' + number;
};

const isMultipleOfThree = (number: number): boolean => number % 3 === 0;

const isMultipleOfFive = (number: number): boolean => number % 5 === 0;


describe('fizzBuzz', () => {
    describe.each([[1, '1'],
    [2, '2'],
    [3, 'Fizz'],
    [4, '4'],
    [5, 'Buzz'],
    [6, 'Fizz'],
    [9, 'Fizz'],
    [10, 'Buzz'],
    [12, 'Fizz'],
    [20, 'Buzz'],
    [15, 'FizzBuzz'],
    [30, 'FizzBuzz']])('given number %s', (input, expectedOutput) => {
        it(`should return ${expectedOutput} as a string`, () => {
            const result = fizzBuzz(input);
            expect(result).toBe(expectedOutput);
        })
    })
})