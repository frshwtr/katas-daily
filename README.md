# katas-daily

Daily kata practise

## 13/8/2021 4pm

Okay, I've pulled myself back together now. I'm in a more focused move and I'm going to give this another shot. I'm on my Linux machine this time.

### Task

**Time:** As long as we need

#### FizzBuzz

From [AgileTechPraxis/katalog](https://github.com/AgileTechPraxis/katalog).

Write a function that takes numbers from 1 to 100 and outputs them as a string, but for multiples of three returns Fizz
instead of the number and for the multiples of five returns Buzz. For numbers which are multiples of both three and five
returns FizzBuzz.

### Wrap up

I got a bit further this evening. I managed to introduce types. I wanted to use a type like this:

```type FizzOrBuzzOrFizzBuzz = 'Fizz' | 'Buzz' | 'FizzBuzz'```

But then I realised how superfluous it would be with returning a number as a string. Which is a valid output of FizzBuzz. So I just settled with `string` as the return type for this exercise.