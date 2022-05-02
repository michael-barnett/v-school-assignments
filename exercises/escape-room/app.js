const readline = require("readline-sync");
console.log("You awake to find yourself locked in a small, dark shack. Before you is a door.");
console.log("Beside the door there is a hole. On the East wall there is a bookshelf full of old tomes.");
readline.keyInPause();

// This function is for choices WITHOUT key
function shackChoiceNoKey(num){
    if(num === 0){
        console.log("The door doesn't budge.")
    }
    if(num === 1){
        console.log("You reach your hand into the hole, and something bites it!");
        console.log("You died.")
        return userIsAlive = false
    }
    if(num === 2){
        console.log("You find a tome named 'Keys, and where to find them', open it up, and out drops a key! You pick it up.")
        return userHasKey = true
    }
}
// This function is for when user gets the key
function shackChoiceWithKey(num){
    if(num === 0){
        console.log("The door opens, you're free!")
        return doorIsOpen = true
    }
    if(num === 1){
        console.log("You reach your hand into the hole, and something bites it!");
        console.log("You died.")
        return userIsAlive = false
    }
    if(num === 2){
        console.log("You find nothing of interest.")
        return userHasKey = true
    }
}
const userOptions = ["Open the door.", "Reach into the hole in the wall.", "Look through the bookshelf."];
let userIsAlive = true
let userHasKey = false
let doorIsOpen = false
while (userHasKey === false && userIsAlive === true){
    shackChoiceNoKey(readline.keyInSelect(userOptions, "What do you do?"))
}
while (userHasKey === true && userIsAlive === true && doorIsOpen === false){
    shackChoiceWithKey(readline.keyInSelect(userOptions, "What do you do?"))
}
if(userIsAlive === false){
    console.log("Game over. Try again.")
}