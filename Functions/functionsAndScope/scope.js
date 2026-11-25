/*
WHAT IS SCOPE?
Visibility and accessibility of variables id diferent parts of code.
Where the variable can be accessed/modified.


. GLOBAL SCOPE: can be accessed from anywhere in the code, including functions and blocks.

. LOCAL SCOPE: can be accessed only inside the function.

. BLOCK SCOPE: A block is a piece of code withing curly braces {}. Variables declared inside that block just can be acessed there.
*/

let globalVar = "I'm a global variable"

function printGlobalVar(){
    console.log(globalVar)
}

printGlobalVar()

const greeting = () => {
    let message = "I'm a local scope!"
    console.log(message)
}

greeting()
//console.log(message)//ReferenceError: message is not defined

if(1){
    let newMessage = "I'm in a block scope"
    console.log(newMessage)
}

//console.log(newMessage)//ReferenceError: newMessage is not defined
