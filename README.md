# katas-daily
Daily kata practise 

## 8/8/2021

For the very first Kata, I'm going to start simple with FizzBuzz from [AgileTechPraxis/katalog](https://github.com/AgileTechPraxis/katalog).

This should be a very simple exercise to test that I've got this repo set up corretly. I also just got i3 Arch set up on my main PC again, so let's give that a test too!

### Task
**Time:** 10 mins

#### FizzBuzz

Write a function that takes numbers from 1 to 100 and outputs them as a string, but for multiples of three returns Fizz instead of the number and for the multiples of five returns Buzz. For numbers which are multiples of both three and five returns FizzBuzz.

### Wrap up

Almost everything was set up! Missed some babel stuff for Jest. My machine seems to be a little sluggish with Webstorm, something to look in to for next time.

In terms of the task, I made a few mistaked. When I introduced `describe.each` I didn't update the tests to use the new parameterised variables meaning I had false positive tests. This was noticed when introducing a `Fizz` test and suddenly seeing the tests pass for no reason...