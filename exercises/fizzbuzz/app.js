let fizzBuzzArr = []

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        fizzBuzzArr.push("FizzBuzz")
    }
    else if(i % 3 === 0){
        fizzBuzzArr.push("Fizz")
    }
    else if(i % 5 === 0){
        fizzBuzzArr.push("Buzz")
    }
    else fizzBuzzArr.push(i)
}

function checkFizzBuzzTally(fizzBuzzArr){
    let fizz = 0;
    let buzz = 0;
    let fizzBuzz = 0;
    for(let j = 0; j < fizzBuzzArr.length; j++){
        if(fizzBuzzArr[j] == 'FizzBuzz'){
            fizzBuzz++
        }
        else if(fizzBuzzArr[j] == 'Fizz'){
            fizz++
        }
        else if(fizzBuzzArr[j] == 'Buzz'){
            buzz++
        }
    }
    console.log(fizz, buzz, fizzBuzz)
}

checkFizzBuzzTally(fizzBuzzArr)
