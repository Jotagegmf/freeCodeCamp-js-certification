/*
What area booleans?
THey are a logical value that can be TRUE(1) or FALSE(0)
*/

const age = 22

if (age >= 18){//comparing and giving a logical response -> true
    console.log("You can drive")
} else{
    console.log("You can´t drive")
}

/*
Equality/Inequality operator
is used to compare if two variables are equal -> it brings a logical value

is used to compare if something is NOT EQUAL
*/

console.log(5 == "5")// true. Because js has a type coercion that trasnform the string in a number

console.log(10 === "10")//False. the === operator compares the value and the type. The value are equal, but the type is diferent.

console.log(15 != "15")//false. 
console.log(15 !== "15")//true

//THE BEST PRACTICES IS TO USE THE STRICT IN/EQUALITY OPERATORS


/*
Comparison Operators:
They return a logical value (TRUE/FALSE)

> greather than
>= greather than or equal
< lesser than
<= lesser than or equal 
*/

console.log(50 > 30)//true
console.log(50 > 50)//false
console.log(50 >=50)//true

console.log(100 < 200)//true
console.log(200 < 200)//false
console.log(200 <=200)//true