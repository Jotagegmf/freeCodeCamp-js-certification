/*
Decision mada based on certain conditions.
if - else if - else


if is the first condition to bhe checked. If the condition returns true, it will ignore all others else if and else.
If the first condition (if) returns false, it will to the second condition, and so on.

falsy values will pass like false in conditional
null, undefined, NaN, 0, ""

truthy values will pass like true in conditionals

*/

if(0){
    console.log("passei")
}else if (""){
    console.log("passei")
}else if (NaN){
    console.log("passei")
}else if (undefined){
    console.log("passei")
}else if (null){
    console.log("passei")
}else{
    console.log("passei")
}

let age = 22

if(age < 16){
    console.log("You can't vote")
} else if(16  <= age < 18 || age > 69){
    console.log("You can vote, but it's optional.")
}else{
    console.log("you are obligated to vote")
}

/*
ternary operator is a simple way to check if else conditions
conditon ? valueIfTRue : valueIfFalse

but we can also use chaining ternary operators

The best practices is to use ternary opertor in single conditions or expressions. And if/else statements dealing with complex conditions.
*/

let drive = 18
console.log(drive >= 18 ? "You can drive" : "you can't drive")

let nota = 56
console.log(nota >= 90 ? "A"
    : nota >= 80 && nota < 90 ? "B"
    : nota >= 70 && nota < 80 ? "C"
    : nota >= 60 && nota < 70 ? "D"
    : nota >= 50 && nota < 60 ? "F"
    : "Reproved")


/*
Logical operators

&& (AND) - returns true if both operands are truthy. (returns the second value)
|| (OR)  - return true if at least one operand is truthy. (returns the falsy value )
*/

const result = true && 'hello';
console.log(result); // hello

const result1 = 1 && 0 && "false";
console.log(result1); // 0

/*
Math object:
are used in more complex operations.

these are tools (methods):
 - Math.random() - generates a floating-poiting number between 0 (inclusive) and 1 (exclsuive)

 - Math.min / Math.max - returns the minimum and the maximun value

 - Math.ceil() - round UP to the nearest whole integer
 - Math-floor() - round DOWN to the nearest whole integer
 -Math.round() - round to the nearest number

 -Math.trunc() - removes the decimal part and return just integer part

 -Math.sqrt() - returns the SQUARE ROOT
 -Math.cbrt() - returns the CUBE ROOT

 -Math.abs() - return the absolute value of a number.
*/

console.log(`Random num: ${Math.random()}`)
console.log(`Random num: ${Math.random()}`)
console.log(`Random num: ${Math.random()}`)


let arr = [300,23,43954,2314,35,546,546,476765,657,2345346, 6.566,5675673,45234,53462346,57657657,87658655635,43532,432432556]

console.log(`Minimum value: ${Math.min(...arr)}`);
console.log(`Maximum value: ${Math.max(...arr)}`);


let num1 = 4.4
console.log(Math.ceil(num1))
console.log(Math.floor(num1))
console.log(Math.round(num1))