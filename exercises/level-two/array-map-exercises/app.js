const numbers = [2, 5, 100];
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers)

const numbers = [2, 5, 100];
const stringNumbers = numbers.map(num => num.toString())
console.log(stringNumbers)

const names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
const uppercaseNames = names.map(function(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()})
console.log(uppercaseNames)

const names =  [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = names.map(celeb => celeb.name)
console.log(namesOnly)

const names =  [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = names.map(function(celeb){
	if(celeb.age >= 18){
	return celeb.name + ' can go to The Matrix'}
	else return celeb.name + ' is under age!!'
	})
console.log(namesOnly)

const readyForDom = names.map(celeb => `<h1>${celeb.name}</h1><h2>${celeb.age}</h2>`)