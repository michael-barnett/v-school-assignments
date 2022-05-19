const nums = [1,2,3]
const result = nums.reduce(function(final, num){
	final += num
	return final})
console.log(result)

const nums = [1,2,3]
const result = nums.reduce(function(final, num){
	return final + num.toString()})
console.log(result)


const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const result = voters.reduce(function(final, voter){
	if(voter.voted){
	final++}
	return final}, 0)
console.log(result)

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const result = wishlist.reduce(function(final, item){
	return final + item.price}, 0)
console.log(result)

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const result = arrays.reduce(function(final, num){
	return final.concat(num[0], num[1], num[2])}, [])
	
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
const result = voters.reduce(function(final, voter){
	if (voter.age >= 18 && voter.age <= 25 ){
		final.numYoungPeople++
		if(voter.voted === true){
		final.numYoungVotes++}}
    if (voter.age >= 26 && voter.age <= 35 ){
		final.numMidsPeople++
		if(voter.voted === true){
		final.numMidVotesPeople++}}
    if (voter.age >= 36 && voter.age <= 55 ){
		final.numOldsPeople++
		if(voter.voted === true){
		final.numOldVotesPeople++}}
	return final
}, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0,
numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0})
console.log(result)