const readline = require("readline-sync")
//
const operations = ["multiply", "divide", "add", "subtract"]
const num1 = readline.questionInt('What is your first number? ');
const num2 = readline.questionInt('What is your second number? ')
const operation = readline.keyInSelect(operations, 'What operation do you want? ')
quickMaths = function(num1, num2){
    if (operation == 0){
        console.log("The result is " + num1 * num2 + "!")
    }
    if (operation == 1){
        console.log(num1 / num2)
    }
    if (operation == 2){
        console.log(num1 + num2)
    }
    if (operation == 3){
        console.log(num1 - num2)
    }
}
quickMaths(num1, num2)