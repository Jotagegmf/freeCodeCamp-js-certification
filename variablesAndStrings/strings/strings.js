let doubleQuotes = "We can use double quotes"
let singleQuotes = 'we can use single quotes'

//bracketNotation and accessing characters
let myName = "João Gabriel"
console.log(myName[0])//J
console.log(myName[1])
console.log(myName[2])
console.log(myName[3])
console.log(myName[4])
console.log(myName[5])
console.log(myName[6])
console.log(myName[7])
console.log(myName[8])
console.log(myName[9])
console.log(myName[10])
console.log(myName[11])//L
console.log(myName[12])//undefined

//length -> total numbers 
//last position = length - 1 (because index starts with 0)

let greeting = "Hello"
console.log(greeting.length)//5
console.log(greeting[greeting.length-1])//o

//Creating Newline \n
let poem = "---\nRoses are red, \nViolets are blue, \nI wanna you\n---"
console.log(poem)

//escaping characters
//let statement = "she said, "hello""  -> Error, because JKs thinks that u´re trying to finish the string

let statement = "she said, \"hello\""
console.log(statement)

let darthVader = "I\'m your father!"
console.log(darthVader)


//template literas
// using backticks `` 
//string manipulation, embending variables directly inside a string -> string interpolation

let age = 22
let aKa = "JotaGê"

let hi = `${greeting}, I\'m ${22}, my name is ${myName}, and knows as ${aKa}`
console.log(hi)

//finding position of a substring
//indexOf(), if the substring is found, it will return the index of the frist occurrence
//If it´s not found, it will return -1
//using a second argument to search for a substring starting at a specif position

//------------012345678901234567890
let phrase = "The democracy is dead"

console.log(phrase.indexOf("is"))//14
console.log(phrase.indexOf("cra"))//8
console.log(phrase.indexOf("live"))//-1

//prompt
//is used to interact with the user 

//if we just want to check if a string contains a spcif substring, we can use includes(). It will return a boolean.

let test = "testing... one, two ,three, testing..."

console.log(test.includes("two"))
console.log(test.indexOf("two"))

//extracting a substring 
//slice(startIndex, endIndex)
//doesn´t include the endIndex
//without modifying the originial string

//             0123456789012
let message = "Hello, world!";
let greeting2 = message.slice(0, 5);
console.log(greeting2)

let world = message.slice(7,12)
console.log(world)

//using just startIndex, without endIndex, everything from the startIndex will be extracted
//                          1         2         3 
//                0123456789012345678901234567890
let newMessage = "Hi, let's Study Something Today"
let exampleWithSlice = newMessage.slice(16)//something today
console.log(exampleWithSlice)


//Casing in js
//toLowerCase() is used to convert all the string in lowercase
//toUpperCase() is used to convert all the string to uppercase
//it´s important in comparisons
console.log(newMessage.toUpperCase())
console.log(newMessage.toLowerCase())

//Cleaning whitespaces
//trim()
//trimStart()
//trimEnd()

let spaces = "     EDM-eletronic dancing music     "
console.log(spaces.trimStart())
console.log(spaces.trimEnd())
console.log(spaces.trim())


/*
replace - is a method() case-sensitie where search and the string 
.replace(searchValue, newValue)
the method, by default, just replace the first ocorrence
to replace all of these occurrences, we use replaceAll

*/

let mrPotato = "The mr. Potato Head is a Potato Toy, but not made using Potato."

let updatedMrPotato = mrPotato.replace("Potato", "Avocado")

console.log(updatedMrPotato)

updatedMrPotato = mrPotato.replaceAll("Potato", "Avocado")
console.log(updatedMrPotato)


/*
repeat - is a method to repeat a string in js
String.repeat(count)
*/

let myNameIs = "Slim Shady"

console.log(myNameIs.repeat(3))
// console.log(myNameIs.repeat(Infinity)) RangeError: Invalid count value: Infinity
// console.log(myNameIs.repeat(-3)) RangeError: Invalid count value: -3