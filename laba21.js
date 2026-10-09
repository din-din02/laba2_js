// 1
// function getRectangleArea(width, height) {
//     let itog=width * height;
//     return itog
// }
// console.log(getRectangleArea( 5, 10 ))

// 2
// function getCircleCircumference(radius) {
//   return 2 * Math.PI * radius;
// }
// console.log(getCircleCircumference(5))

// 3
// function getAverage(value1, value2) {
//     return (value1 + value2) / 2;
// }
// console.log(getAverage(5, 5))

// 4
// function getDistanceBetweenPoints(x1, y1, x2, y2) {
//     return Math.hypot(x2 - x1, y2 - y1);
// }
// console.log(getDistanceBetweenPoints(-5,0,10,-10))

// 5
// function getLinearEquationRoot(a, b) {
//     return -b / a;
// }
// console.log(getLinearEquationRoot(5, -10)); 

// 6
// function getAngleBetweenVectors(x1, y1, x2, y2) {
//   let dot = x1 * x2 + y1 * y2;
//   let val1 = Math.sqrt(x1 * x1 + y1 * y1);
//   let val2 = Math.sqrt(x2 * x2 + y2 * y2);

//   return Math.acos(dot / (val1 * val2));
// }
// console.log(getAngleBetweenVectors(0,1,0,-1))

// 7
// function getLastDigit(value) {
//     return value % 10;
// }
// console.log(getLastDigit(37))

// 8
// function parseNumberFromString(value) {
//     return Number(value);
// }
// console.log(parseNumberFromString('100'))

// 9
// function getParallelepipedDiagonal(a, b, c) {
//     return Math.hypot(a, b, c);
// }
// console.log(getParallelepipedDiagonal( 1,1,1))

// 10
// function roundToPowerOfTen(num, pow) {
//   let factor = 10 ** pow;
//   return Math.round(num / factor) * factor;
// }
// console.log(roundToPowerOfTen(1234, 3))

// 11
// function isPrime(n) {
//   // Числа меньше или равные 1 не являются простыми
//     if (n <= 1) return false;
//     // 2 и 3 простые числа
//     if (n <= 3) return true;
//     // Если число делится на 2 или 3, оно не простое
//     if (n % 2 === 0 || n % 3 === 0) return false;
//     // Проверяем делители вида 6k +/- 1 до квадратного корня из n
//     let boundary = Math.sqrt(n);
//     for (let i = 5; i <= boundary; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) {
//         return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(7))

// 12
// function toNumber(value, def) {
//     let converted = Number(value);
//     return Number.isNaN(converted) ? def : converted;
// }
// console.log(toNumber('test', 0))

// 13
// function getCube(num) {
//   return num ** 3;
// }
// console.log(getCube(3))

// 14
// function getFibonacciNumber(index) {
//     if (index === 0) return 0;
//     if (index === 1) return 1;

//     let a = 0;
//     let b = 1;

//     for (let i = 2; i <= index; i++) {
//         const next = a + b;
//         a = b;
//         b = next;
//     }

//     return b;
// }
// console.log(getFibonacciNumber(1))

// 15
// function getSumToN(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(getSumToN(5))

// 16
// function getSumOfDigits(num) {
//     return Math.abs(num)
//     .toString()
//     .split('')
//     .reduce((sum, digit) => sum + Number(digit), 0);
// }
// console.log(getSumOfDigits(123))

// 17
// function isPowerOfTwo(num) {
//     // Числа меньше или равные 0 не могут быть степенью двойки
//     if (num <= 0) return false;

//     // Пока число делится на 2 без остатка, делим 
//     while (num % 2 === 0) {
//         num = num / 2;
//     }
//     // Если после всех делений осталась 1, то это была степень двойки
//     return num === 1;
// }
// console.log(isPowerOfTwo(16))

// 18
// function getSine(num) {
//     return Math.sin(num);
// }
// console.log(getSine(Math.PI/2))

// 19
// function numberToStringInBase(number, base) {
//     return number.toString(base);
// }
// console.log(numberToStringInBase(255,16))

// 20
// function toExponential(number, fractionDigits) {
//     return number.toExponential(fractionDigits);
// }
// console.log(toExponential(12345,2))

// 21
// function toFixed(number, fractionDigits) {
//     let itog=number.toFixed(fractionDigits)
//     return itog;
// }
// console.log(toFixed(12.345, 1))

// 22
// function toPrecision(number, precision) {
//     let itog=number.toPrecision(precision);
//     return itog
// }
// console.log(toPrecision(12.345, 4))

// 23
// function getNumberValue(number) {
//     let itog=number.valueOf()
//     return itog
// }
// console.log(getNumberValue(new Number(5)))
// console.log(getNumberValue(Number(-5) ))

// 24
// function isNumber(number) {
//     let itog=Number.isFinite(number);
//     return itog
// }
// console.log(isNumber('5' ))
// console.log(isNumber(5))

// 25
// function isInteger(number) {
//     let itog=Number.isInteger(number);
//     return itog
// }
// console.log(isInteger(5.1))
// console.log(isInteger(5))

// 26
// function getFloatOnString(str) {
//     let itog=Number.parseFloat(str);
//     return itog
// }
// console.log(getFloatOnString('4.567abcdefgh'))

// 27
// function getIntegerOnString(str, base) {
//     let itog=Number.parseInt(str, base);
//     return itog
// }
// console.log(getIntegerOnString('4.567abcdefgh', 10))

// 28
// function isSafeInteger(number) {
//     let itog=Number.isSafeInteger(number);
//     return itog
// }
// console.log(isSafeInteger(2 ** 53))
// console.log(isSafeInteger(10))

// 29
// function roundToSmallestInteger(number) {
//     return Math.floor(number);
// }
// console.log(roundToSmallestInteger(5.9))

// 30
// function roundToLargestInteger(number) {
//     return Math.ceil(number);
// }
// console.log(roundToLargestInteger(5.1))

// 31
// function roundToNearestInteger(number) {
//     return Math.round(number);
// }
// console.log(roundToNearestInteger(5.5))

// 32
// function getIntegerPartNumber(number) {
//     return Math.trunc(number);
// }
// console.log(getIntegerPartNumber(5.5))
// console.log(getIntegerPartNumber(5.4))
// console.log(getIntegerPartNumber(-5.5))

// 33
// function getSumOfNumbers(x1, x2, x3) {
//     return x1 + x2 + x3;
// }
// console.log(getSumOfNumbers(1,2,3))

// 34
// function getMaxNumber(firstNumber, secondNumber) {
//     return Math.max(firstNumber, secondNumber);
// }
// console.log(getMaxNumber(1,2))

// 35
// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInteger(-5,0))

// 36
// function getHypotenuse(a, b) {
//     return Math.hypot(a, b);
// }
// console.log(getHypotenuse(3,4))

// 37
// function getCountOfOddNumbers(number) {
//     return Math.ceil(number / 2);
// }
// console.log(getCountOfOddNumbers(4))
// console.log(getCountOfOddNumbers(15))
