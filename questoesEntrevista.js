/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2+2^2+2^2=9
*/
function squareSum(numbers) {
  return numbers.reduce((sum, n) => sum + n ** 2, 0);
}

/*
Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).
*/
function opposite(number) {
  return -number;
}

/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
*/
function century(year) {
  return Math.ceil(year / 100);
  return;
}
/*
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.
*/
const areaOrPerimeter = (l, w) => {
  if (l === w) {
    return l * w;
  }
  return 2 * l + 2 * w;
};
//outra forma:
const areaOrPerimeter2 = (l, w) => (l === w ? l * w : 2 * (l + w));

/*
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
*/
const stringToNumber = (str) => +str;
/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/
const sumTwoSmallestNumbers = (numbers) => {
  numbers.sort((a, b) => a - b); //ordenando de forma crescente
  return numbers[0] + numbers[1];
};
/*
The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
*/
letters_wrong = [
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
function printerError(s) {
  const array_letters = s.split('');
  const length_letters = array_letters.length;
  let error = 0;
  array_letters.forEach((letter) => {
    letters_wrong.forEach((letter_wrong) => {
      letter === letter_wrong ? (error += 1) : error;
    });
  });
  return `${error}/${length_letters}`;
}
//outra forma
function printerError2(s) {
  const array_letters = s.split('');
  let count = array_letters.reduce(
    (accumulador, letter) => (letter > 'm' ? accumulador + 1 : accumulador),
    0,
  );
  return `${count}/${s.length}`;
}

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
*/
const binaryArrayToNumber = (arr) => {
  return arr
    .reverse()
    .reduce((number, element, index) => number + element * 2 ** index, 0);
};
//outra forma
const binaryArrayToNumber2 = (arr) => parseInt(arr.join(''), 2);
//arr.join('') une os elementos do array em uma única string.
//parseInt(string, base) interpreta a string como um número inteiro na base especificada. Aqui, usamos 2 como a base para interpretar a string como um número binário.

/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/
const boolToWord = (bool) => (bool ? 'Yes' : 'No');

/*
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"
*/
const areYouPlayingBanjo = (name) =>
  name.toLowerCase()[0] === 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
*/
const past = (h, m, s) => 1000 * (s + m * 60 + h * 60 * 60);

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/
const descendingOrder = (n) =>
  +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.
*/
const countSheeps = (sheep) =>
  sheep.reduce((number, item) => (item ? number + 1 : number), 0);
//outra forma:
const countSheeps2 = (sheep) => sheep.filter(Boolean).length;
/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return true if you're better, else false!

Note:
Your points are not included in the array of your class's points. Do not forget them when calculating the average score!

*/
function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((prev, current) => prev + current, 0) /
      classPoints.length
  );
}
/*Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!*/
function smash(words) {
  return words.join(' ');
}

/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.*/
function getMiddle(s) {
  return s.length % 2 == 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.floor(s.length / 2)];
}
//outra resolução:
function getMiddle2(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
*/
function squareDigits(nums) {
  return +String(nums)
    .split('')
    .reduce((ac, num) => ac + num ** 2, '');
}

/*Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
EX:1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)

*/
const addBinary = (a, b) => (a + b).toString(2);
