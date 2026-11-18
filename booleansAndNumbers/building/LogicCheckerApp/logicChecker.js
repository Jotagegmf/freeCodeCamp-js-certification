let truthyOrFalsy = true
console.log(Boolean(truthyOrFalsy))
truthyOrFalsy = "freeCodeCamp"
console.log(Boolean(truthyOrFalsy))
truthyOrFalsy = false
console.log(Boolean(truthyOrFalsy))
truthyOrFalsy = ""
console.log(Boolean(truthyOrFalsy))

const hasDeveloperJob = true

if(hasDeveloperJob){
    console.log("Timmy is employed as a developer.")
}

const isTimmyAGamer = false

if(isTimmyAGamer){
    console.log("Timmy loves to play World of Warcraft.")
}

const timmyAge = 15


if(timmyAge >= 16){
    console.log("Timmy is old enough to drive.")
}else{
    console.log("Timmy is not old enough to drive.")
}