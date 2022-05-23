// function getLargest(...nums){
//     let counter = 0;
//     for(i = 0; i < nums.length; i++){
//         if(nums[i] > counter){
//             counter = nums[i];
//         }
//     }
//     console.log(counter)
// }

// getLargest(6, 8, 3, 20, 45, 2, 10, 15)

function getCharacter(array, letter){
    for(let i = 0; i < array.length; i++){
         for(let j = 0; j < array[i].length; j++){
             if(array[i][j] === letter){
                 console.log(array[i])
             }
         }
    }
}

// getCharacter(["hey", "how", "are", "you?", "though!"], "h")

function isDivisible(num1, num2){
    if(num1 % num2 == 0)
    console.log("Your number is divisible.")
    else console.log("Your number is indivisible.")
}

isDivisible(15, 4)