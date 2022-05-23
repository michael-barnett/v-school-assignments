// const collectAnimals = (...animals) => animals;
// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// function combineFruit(fruit, sweets, vegetables){
//     return {fruit: fruit, sweets: sweets, vegetables: vegetables}
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))

// function returnFirst(items){
//     const [firstItem, , thirdItem] = items;
//     return thirdItem
// }

// arr = ['bill', 'jack', 'eric']

// console.log(returnFirst(arr))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     const [firstFav, , secondFav, thirdFav] = arr;
//     return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}.`;
// }

// // console.log(returnFavorites(favoriteActivities))

// function combineAnimals(array1, array2, array3,) {
//     return [...array1, ...array2, ...array3]
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];
// const bigAnimals = ['elephant', 'dinosaur']
// const smallAnimals = ['rat', 'cat']

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, bigAnimals, smallAnimals));
// // ["dog", "cat", "mouse", "jackolope", "platypus"]


// const product = (...nums) => {
//     let numbers = nums;
//     return numbers.reduce((acc, number) => {return acc * number}, 1)
// }

// console.log(product(5, 10, 2))

// let unshift = (array, ...addedNums) => [...addedNums, ...array]

// arrayofNums = [1, 3, 5]

// console.log(unshift(arrayofNums, 1, 4, 7, 8))

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name;
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]