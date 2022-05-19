const nums = [1, 3, 5, 2, 90, 20]
nums.sort((a, b) => a - b)
console.log(nums)

const nums = [1, 3, 5, 2, 90, 20]
nums.sort((a, b) => b - a)
console.log(nums)

const words = ["dog", "wolf", "by", "family", "eaten"]
words.sort((a, b) => a.length - b.length)
console.log(words)

words.sort()
console.log(words)

const people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

people.sort((a, b) => a.age - b.age)
console.log(people)