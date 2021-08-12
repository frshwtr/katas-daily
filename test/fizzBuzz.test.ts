/*
Write a function that takes a number and outputs them as a string, but for multiples of three returns Fizz
instead of the number and for the multiples of five returns Buzz. For numbers which are multiples of both three and five
returns FizzBuzz.
*/

describe('fizzbuzz', () => {
    describe.each([
        [1,'1'],
        [2,'2'],
        [3,'Fizz'],
        [4,'4'],
        [5,'Buzz'],
        [6,'Fizz'],
        [15,'FizzBuzz'],
        [30,'FizzBuzz']
    ])('given number %s', (input, expectedOutput) => {
        it(`should return ${expectedOutput} as a string`, () => {
            const result = fizzbuzz(input);
            expect(result).toBe(expectedOutput);
        });
    })
});

function fizzbuzz(i:number):string {
    let output = '';
    if(i % 3 === 0) {
        output += 'Fizz';
    }
    if(i % 5 === 0) {
        output += 'Buzz';
    }
    return output || '' + i;
}
