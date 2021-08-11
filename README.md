# katas-daily
Daily kata practise 

## 11/8/2021

Missed out on doing a kata yesterday, it was a bit of a long day. Along with the GitHub outage made me lazy resulting me in skipping. Though of course, the outage would not have prevented me from completing a kata, I was being lazy and picking excuses. That's a behaviour I should iron out.

Today I will do FizzBuzz on my work machine. Let's see if I can improve on Monday's attempt!

### Task
**Time:** 10 mins

#### FizzBuzz
From [AgileTechPraxis/katalog](https://github.com/AgileTechPraxis/katalog).

Write a function that takes numbers from 1 to 100 and outputs them as a string, but for multiples of three returns Fizz instead of the number and for the multiples of five returns Buzz. For numbers which are multiples of both three and five returns FizzBuzz.

### Wrap up

I got a bit savvier with my WebStorm shortcuts today. I noticed that the `describe` and `it` shortcuts will take you into the inside block once you press enter after typing the description. I also made more use of the refactor tools to extract functions.

When introducing the behaviour for multiples of three and five. I introduced a function `isMultipleOfThreeAndFive` which would call both `isMultipleOfThree` and `isMultipleOfFive` and returned `FizzBuzz` if the result was `true`. This meant the implementation avoided the need to store the output to a string and would return if that condition were true. However, I asked myself if I could optimise it further and found that with `isMultipleOfThreeAndFive`, in the worst case it would perform four condition checks. Alternatively, by using the string approach, in the worst case it would do two.

For the next attempt, I'm thinking of spicing things up and using bash 👀