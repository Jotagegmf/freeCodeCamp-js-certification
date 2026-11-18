/*
Numbers - floats, integers, infinite, NaN, negative
*/

const num1 = 10
const num2 = 10.54646
console.log(typeof(num1))
console.log(typeof(num2))

const infiniteNumber = 1/0
console.log(infiniteNumber)
console.log(typeof(infiniteNumber))

const notANumber = "nums"/2
console.log(notANumber)
console.log(typeof(notANumber))

/*
Aritmethics operations
addition +
subtraction -
multiplication *
division /
remainder %
exponentiation **
*/

const n1 = 100
const n2 = 500
const n3 = 1000

console.log(`Sum: ${n1} + ${n2} + ${n3} =`, n1 + n2 + n3)
console.log(`Sub: ${n3} - ${n2} - ${n1} =`, n3 - n2 - n1)
console.log(`Multi: ${n1} x ${n2} x ${n3} = `, n1 * n2 *n3)
console.log(`Div: ${n2}/${n1} = `, n2/n1)
console.log(`Exp: ${n1}^3 = `, n1**3)
console.log(`Rest: ${n1}%3 = `, n1%3)

/*
strings + number
number + string

JS has something called type coercion.
When we try to make operations (addition) between strings and numbers, it will convert to string.
But when we try to make the samething with subtraction, multiplication or division - another coercion occurr. But they are converted in numbers
*/

const stringPlusNumber = "500" + 10
console.log(stringPlusNumber)
console.log(typeof(stringPlusNumber))

const numberPlusString = 10 + "599"
console.log(numberPlusString)
console.log(typeof(numberPlusString))

const stringSubNumber = "500" - 100
console.log(stringSubNumber)
console.log(typeof(stringSubNumber))

const NumberSubString = 100 - "500"
console.log(NumberSubString)
console.log(typeof(NumberSubString))

//But what happens if a not number string? 
const addResult = 'abc' + 5
const subtractionResult = 'abc' - 5;
const multiplicationResult = 'abc' * 2;
const divisionResult = 'abc' / 2;
console.log(addResult)// Concat
console.log(subtractionResult) //NaN
console.log(multiplicationResult) //NaN
console.log(divisionResult) //NaN

/*
Operations with:
true -> 1
false -> 0
null -> 0
udefined -> NaN
*/

/*
Operations precedence:
Multiplication and division comes first than subtraction or addition.
Parentheses override precedence 
*/

/*
Increment (++) or decrement (--:
These operators allow to adjust the variable adding 1 or subtracting 1 
*/

let x = 10
//x = x + 1 
x++

let y = 20
y-- // y = y - 1

//Another diferencce is putting the operator orefixed or posfixed
let z = 100
let a = 200
console.log(++z) // increments first and the log it -> 101
console.log(a++) // log first and then increments  -> 200 

/*
compound assignment operator: 
it is a shorthand for an operation on a variable followed by storing the result in the same variable
*/

let numero = 100
numero +=1000 // numero = numero + 1000