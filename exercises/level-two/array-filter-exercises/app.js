const numbers = [3, 6, 8, 2]
const fiveAndUp = numbers.filter(num => num >= 5)
console.log(fiveAndUp)

const numbers = [3, 6, 8, 2]
const evenOnly = numbers.filter(num => num % 2 === 0)
console.log(evenOnly)

const wordSalad = ["dog", "wolf", "by", "family", "eaten", "camping"]
const fiveAndUp = wordSalad.filter(word => word.length <= 5)
console.log(fiveAndUp)

const illuminati = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]
const members = illuminati.filter(member => member.member === true)
console.log(members)

const people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]
const matrixWatchers = people.filter(person => person.age >= 18)
console.log(matrixWatchers)