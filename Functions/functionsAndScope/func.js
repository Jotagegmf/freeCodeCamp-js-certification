/*
What are functions?
reusable pieces of code that perform an specif task.
input -> operation -> output
*/

function greet(){
    console.log("hi")
}
// we´ve declared a  function called greet but. The function inside shows "hi" but running the code nothing happens. Why? 
//Because we need to declare the function

/*
CALLING A FUNCTION:
function call or invocation is when we use or execute the function.
functionName()
*/

greet()
// now, the message was logged.

/*
Parameters and args:
parameters are values that will be passed to the function when it´s called. arguments are the actual values passed (input passed). 
*/

function newGreeting(name){
    console.log(`Hello, ${name}!` )
}

newGreeting("Nathalia")
newGreeting("Agnes")
newGreeting("Jota")
// When we run the code, each calling will show an specific value.
// name server as the parameter while "Nathalia", "Agnes", "Jota" work as arguments.
//The function is reusable, so we can use it when we call it, or in other parts of code.


/*
RETURN VALUES:
When a function finishes the execution, it returns a value.
By default is undefined.
It is important because sometimes we want to use that value later on our code
*/

function sum(n1, n2){
    return n1 + n2
}

console.log(sum(10,200))

/*
ANONYMOUS FUNCTION:
The meaning diferencce between named function and an anonymopus function is that a named has ad identifier, while anonymous doesn´t.

the function itself has no name, but it´s assigned to a variable

They´re commonly used inside functions (callback functions).
*/

const hello = function(){console.log("Hello!")}
console.log(hello)
hello()



/*
DEFAULT PARAMETERS:

We can set default values for parameters. These params are used when the fuction is called without args.
*/

function greetings(name = "guest"){
    console.log(`Hello, ${name}`)
}

greetings()
greetings("Jota")

/*
ARROW FUNCTIONS: 

    const functionName = (params) => {
        code
    }

if we have just one param, we can remove the parentheses like:
    const functionName = params => {
        code    
    }

if the function has just a single line of code, you can remove the curly braces:
    const functionName = param => return...


*/
let multiply = (a, b = 1) => a * b;

console.log(multiply(5));
console.log(multiply(5, 2));