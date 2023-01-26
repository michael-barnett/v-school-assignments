let fizzbuzzArr = []

for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        fizzbuzzArr.push("Fizzbuzz")
    }
    else if(i % 3 === 0){
        fizzbuzzArr.push("Fizz")
    }
    else if (i % 5 === 0){
        fizzbuzzArr.push("Buzz")
    }
    else (fizzbuzzArr.push(i))
}

console.log(fizzbuzzArr)