const readlineSync = require("readline-sync")
console.log("You awake in a dank and gloomy cave. You try to remember where you were last, but you can hardly remember a thing.")
console.log("You try to get up and move around, but you can barely see a thing. Suddenly, a light sparks up and reveals a sunken, hollow face.")
console.log("The face eeks out some words.")
const playerName = readlineSync.question("'Another poor soul, doomed to suffer in the caves forever. What is your name?' ")
console.log(`'Very well then ${playerName}. I wish you luck down here. These caves are filled with nothing but peril.'`)
console.log(`'Take this sword, and do what you will. Navigate these caves and you may hope to reach the surface one day'`)
console.log("*You acquired a sword.*")

let inventory = [
    {name: 'rusty sword', attackMin: 1, attackMax: 3, description: 'A rusty sword which has clearly seen better days. Still, it will do.'}]
let monsters = [
    {name: 'bat', hp: 4, attackMin: 1, attackMax: 2},
    {name: 'skeleton', hp: 6, attackMin: 1, attackMax: 4},
    {name: 'vampire', hp: 10, attackMin: 2, attackMax: 8}
]
let player = {hp: 10, attack: 2}
let walksLeft = 10
let mobNumber = 0
let equippedWeapon = inventory[0]
let trash = {name: 'trash', description: "Not much going on here. it's useless trash."}
let healthPotion = {name: 'Health Potion', description: 'A magical health potion! Drinking this will restore 5 health points. Consumed upon use.'}
function drinkPotion(){
    console.log('You drink the potion. Glug glug glug!');
    player.hp = player.hp + 5;
}
let refinedSteelSword = {name: 'Refined Steel Sword', attackMin: 2, attackMax: 5, description: 'An elegant refined steel sword. How it has stayed in such great shape is a mystery.'}
inventory.push(healthPotion)
function walk(){
    let walkChance = Math.floor(Math.random() * 100)
    if(walkChance < 33){
        doCombat()
    }
    if(walkChance > 33){
        walksLeft--
        let walkMessage = Math.random() * 100;
        if (walkMessage < 33){
            console.log("You feel yourself getting closer to the exit. You advance forward.");
        }
        else if (walkMessage < 66){
            console.log("You think you see a light up ahead. You keep moving.");
        }
        else{
            console.log("Your face touches a cobweb. Eek! You press onward.");
        }
    }    
    if(walksLeft === 0){
        console.clear();
        console.log('You see a light at the end of the caves, and step forward into the beautiful sunlight.');
        console.log('Congratulations! You won!');
        process.exit()
    }
}
function checkStatus(){
    console.log("Name: " + playerName + "; Health: " + player.hp + "; Current Weapon: " + equippedWeapon.name)
}
function showInventory(){
    console.log(inventory);
    console.log("You open your bag.")
    let inventoryCheck = readlineSync.keyInSelect(inventory, 'Would you like to equip one of these items?')
    if(inventoryCheck === -1){
        console.log("You close your bag.")
    }
    else if(inventory[inventoryCheck] === equippedWeapon){
        console.log('This item is already equipped.')
    }
    else if(inventory[inventoryCheck].name === 'Health Potion'){
        if(readlineSync.keyInYN('Do you want to drink the health potion?') === true){
            drinkPotion();
            for(let i = 0; i < inventory.length; i++){ 
                if (inventory[i].name === 'Health Potion') {
                    inventory.splice(i, 1); 
                }
            }
        }
    }
    else{equippedWeapon = inventory[inventoryCheck]}
    }

function doCombat(){
    let mobVarietyChance = Math.random() * 100;
    if (mobVarietyChance < 70){
        mobNumber = 0;
        combat()
    }
    else if (mobVarietyChance < 90){
        mobNumber = 1;
        combat()
    }
    else {mobNumber = 2;
        combat()}
}

function monsterAttackDamage(monsterMin, monsterMax){
    return Math.floor(Math.random() * (monsterMax - monsterMin + 1)) + monsterMin;
}
function playerAttackDamage(playerMin, playerMax){
    return Math.floor(Math.random() * (playerMax - playerMin + 1)) + playerMin;
}

function combat(){
    console.log("You encounter a " + monsters[mobNumber].name + "!");
    let mobHealth = monsters[mobNumber].hp;
    let mobAlive = true;
    let runSuccess = false;
    while (mobAlive === true && player.hp > 0 && runSuccess === false){
        let userInput = readlineSync.keyIn("[A]ttack || [R]un! >", {limit: 'arx'});
        let mobAttackChance = Math.random();
        if (userInput === 'a'){
            if(mobAttackChance < 0.3){
                player.hp = player.hp - monsterAttackDamage(monsters[mobNumber].attackMin, monsters[mobNumber].attackMax) ;
                console.log('The ' + monsters[mobNumber].name + ' attacks you! Ouch! Your hp is now ' + player.hp + '!')
            }
            if (mobAttackChance > 0.3){
                mobHealth = mobHealth - playerAttackDamage(equippedWeapon.attackMin, equippedWeapon.attackMax);
                console.log('The ' + monsters[mobNumber].name +' takes a nasty swing from your sword! Their health is now ' + mobHealth + '!')
                }
            if (mobHealth <= 0){
                    console.log('You killed the ' + monsters[mobNumber].name + '!');
                    function monsterDropLoot(){
                        let dropLootChance = Math.random() * 100;
                        function dropitem(){
                            let droppedItemChance = Math.random() * 100;
                            if(droppedItemChance > 80){
                                inventory.push(refinedSteelSword);
                                console.log('You found a sword! Check your inventory for more details.')
                            }
                            else if(droppedItemChance > 30){
                                inventory.push(healthPotion);
                                console.log('You found a health potion! Check your inventory for more details.')
                            }
                            else{
                                inventory.push(trash)
                                console.log('You found... trash! Check your inventory for more details.');
                            }
                        }
                        if (dropLootChance > 40){
                            console.log('You see something fall from the ' + monsters[mobNumber].name + '.')
                            dropitem()
                        }
                        else {console.log('The ' + monsters[mobNumber].name + " had nothing of interest on them.")}
                    }
                    monsterDropLoot();
                    mobAlive = false
                }
        }
        if (userInput === 'r'){
            let runChance = Math.random();
            if (runChance < 0.5){
                runSuccess = true;
                console.log("You successfully run away from the " + monsters[mobNumber].name + "!")
            }
            if (runChance > 0.5){
                player.hp = player.hp - 1;
                console.log("You try to run away, but the " + monsters[mobNumber].name + " strikes you from behind! Your hp is now " + player.hp + "!")
            }
         }
        if(userInput == 'x'){
            console.clear();
            process.exit()
        }
     }
}

while (player.hp > 0){
    let userInput = readlineSync.keyIn("Check [S]tatus || [W]alk || Check [I]nventory >", {limit: 'swix'});
    if(userInput == 'w'){
        walk()
    }
    if(userInput =='s'){
        checkStatus()
    }
    if(userInput == 'i'){
        showInventory()
    }
    if(userInput == 'x'){
        console.clear();
        process.exit()
    }
}

if (player.hp <= 0){
    console.clear();
    console.log("Oh no, you've perished!");
    process.exit()
}