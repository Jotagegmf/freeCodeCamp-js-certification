/*
single operand to perform operations like type coversion, value manipulation or checking conditions
*/

const str = "42"
console.log(typeof(str))//string
const notAstr = +str
console.log(notAstr)//42
console.log(typeof(notAstr))//number
const negativeStr = -str
console.log(negativeStr)//-42
console.log(typeof(negativeStr))//number

/*
the logical NOT operator (!) - it flips the value of operand. 
!true -> false
!false -> true
*/

const a = "-"
console.log(a.repeat(10))
console.log(!1)//false
console.log(!0)//true
console.log(!true)//false
console.log(!false)//true
console.log(!"hello")//false
console.log(!"")//true

/*
bitwise operators: they act in the BINARY REPRESENTATION of numbers.
bits and binary numbers:
BIT: 0's and 1's 
binary numbers is a numeric system to represent numbers, but using only 0's and 1's
                           
                1*2^3 + 0*2^2 + 1*2^1 + 0*2^0
                        8020 = 8 + 2 = 10
Representation of 10 -> 1010 in binary
*/

//bitwise AND (&): return 1 in each position that correspond 1 in both numbers
let teste1 = 20 //10100
let teste2 = 29 //11101
console.log(teste1 & teste2)//10100 -> 20

//bitwise OR (|): return 1 if has a 1.

let teste3 = 15 // 1111
let teste4 = 22 //10110
console.log(teste3 | teste4)//11111 -> 31

//bitwise XOR (^): returns a 1 in each position  that are not equal.

let teste5 = 27 //11011
let teste6 = 14 //01110
console.log(teste5 ^ teste6) //10101 -> 21