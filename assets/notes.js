// function catString(aString){
//     return "anything" + aString + "4";
// }

// let myArray = ["dog", "cat", "frog"]
    
// for (let i = 0; i < myArray.length; i++){
//     console.log(catString(myArray[i]));
// }


// function cramerDrink(aString){
//     return "cramer" + " " +"likes" + " " + "to" + " " + "burp";
// }

// let secondArray = ["Moutain Dew", "Pepsi", "Diet Coke"]

// for (i = 0; i < secondArray.length; i++){
//     console.log(cramerDrink(secondArray[i]));
// }

// function someFunction(potato){ // "potato" is used a variable
//     console.log(potato+"!!")
// }

// someFunction("goodbye")
// someFunction("hello")

// function someFunction (potato, tomato, something){
//     console.log (potato +"!!!")
//     console.log (tomato)
//     console.log (something + "?")
// }

// someFunction ("a", "b", "c")
// someFunction ()

function findMaxNumber(numberArray){
    return Math.max(...numberArray);
}

let firstMaxNum = findMaxNumber([2, 500, 489, 345])
let secondMaxNum = findMaxNumber([34, 500, 673, 20])
let thirdMaxNum = findMaxNumber([1000, 342, 5000, 456])

console.log(firstMaxNum)
console.log(secondMaxNum)
console.log(thirdMaxNum)
// console.log(findMaxNumber([100, 2376, 4893, 894]))