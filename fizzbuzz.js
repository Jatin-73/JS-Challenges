/**
 * FizzBuzz Solution in JavaScript
 *
 * Description:
 * This script contains a JavaScript implementation of the classic FizzBuzz problem.
 *
 * Problem Statement:
 * For a given integer n, the program prints:
 * - "FizzBuzz" for numbers divisible by both 3 and 5
 * - "Fizz" for numbers divisible by 3 but not 5
 * - "Buzz" for numbers divisible by 5 but not 3
 * - The number itself if it is not divisible by 3 or 5
 */

/**
 * FizzBuzz function to solve the problem.
 *
 * @param {number} n - The upper limit of numbers to process.
 */
const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);
