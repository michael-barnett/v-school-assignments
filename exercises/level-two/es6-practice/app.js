// const ownerName = "John"
// let age = 101
// function runForLoop(...pets) {
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", ownerName)
//     return petObjects
// }

// runForLoop('cat', 'dog')

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map((carrot) => ({ type: "carrot", name: carrot }))
// }

// let carrot = mapVegetables(carrots)

// console.log(carrot)

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) => person.friendly)
// }

// const doMathSum = (a, b) => a + b;

// const produceProduct = (a, b) => a * b;


// const printString = ({firstName = 'Jane', lastName = 'Doe', age = 100}) => console.log(`Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)

// const deadMom = {
//     lastName: 'Stark',
// }

// printString(deadMom)

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];

// function filterForDogs(arr) {
//      return arr.filter(animal => (animal.type === "dog"))
// }

// console.log(filterForDogs(animals))

// Hi Janice!

// Welcome to Hawaii.

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

// const welcomeMessage = ({location, name}) => `Hi ${name}!\n\nWelcome to ${location}.\n\nI hope you enjoy your stay. Please ask the president of ${location} is you need anything.`;

// console.log(welcomeMessage({location: 'Ecuador', name: 'Ricardo'}))