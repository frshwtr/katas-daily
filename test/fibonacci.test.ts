const positionGreaterThanThree = (position: number) => position >= 3;

const fibonacci = (position: number): number => {
    if(positionGreaterThanThree(position)) return fibonacci(position-1) + fibonacci(position - 2)
    return 1
};
describe('Fibonacci', () => {
    describe.each([[1,1],[2,1], [3,2],[4, 3], [5, 5], [6, 8],[7,13], [8, 21]])('given input %s', (input, expectedOutput) => {
        it(`should return ${expectedOutput}`, () => {
            const result = fibonacci(input);
            expect(result).toBe(expectedOutput);
        })
    })

})