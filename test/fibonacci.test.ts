const isNumberGreaterThanOrEqualToThree = (number: number) => number >= 3;

const fibonacci = (number: number):number => {
    if (isNumberGreaterThanOrEqualToThree(number)) return fibonacci(number - 1) + fibonacci(number - 2)
    return 1
};

describe('fibonacci', () => {
    describe.each([[1, 1],[2,1], [3,2], [4,3], [5, 5], [6,8], [7,13], [8,21],[9,34]])('given input %s', (input, expectedOutput) => {
        it(`should return ${expectedOutput}`, () => {
            const result = fibonacci(input);
            expect(result).toBe(expectedOutput)
        })
    })
})