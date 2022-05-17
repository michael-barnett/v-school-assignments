//1 array with peoples names
//2 array of the alphabet
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstruvwxyz"
var newArr = []
function forception(people, alphabet){
    for(var i = 0; i < people.length; i++){
        newArr.push(people[i] + ':');
        for(var j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j].toUpperCase())
        }
    }
    console.log(newArr)
}
forception(people, alphabet)