// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(var i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// for(var i = numbers.length; i >= 0; i--){
//     console.log(numbers[i])
// }

// const fruit = ["banana", "orange", "apple", "kiwi"]
// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }
// let numbers = []
// for(var i = 0; i < 10; i++){
//     numbers.push(i)
// }
// console.log(numbers)
// for(var i = 0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }
// const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for(var i = 0; i < fruit.length; i += 2){
//         console.log(fruit[i])
// }
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  
  // ["Harrison Ford", "Vladimir Putin"] // names
  // ["Singer", "Entertainer"] // occupations
  names = []
  occupations = []
  for(var i = 0; i < peopleArray.length; i++){
      names.push(peopleArray[i].name);
      occupations.push(peopleArray[i].occupation);
  }
  console.log(names)
  console.log(occupations)