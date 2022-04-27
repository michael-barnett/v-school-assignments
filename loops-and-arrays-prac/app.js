// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// let computerCount = 0
// for(var i = 0; i < officeItems.length; i++){
//      if (officeItems[i] === "computer"){
//          computerCount ++
//      }
// }
// console.log(computerCount)

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//       name: "Mike",
//       age: 12,
//       gender: "male"
//     },{
//       name: "Madeline",
//       age: 80,
//       gender: "female"
//     },{
//       name: "Cheryl",
//       age: 22,
//       gender: "female"
//     },{
//       name: "Sam",
//       age: 30,
//       gender: "male"
//     },{
//       name: "Suzy",
//       age: 4,
//       gender: "female"
//     }
//   ]
//   for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
//       if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18)
//       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see the movie.")
//       if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18)
//       console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is NOT old enough to see the movie.")
//   }
lightswitchCheck = function(){
    lightswitchMath = [50, 51, 52]
    var sum = 0;
    for(var i = 0; i < lightswitchMath.length; i++){
    sum += lightswitchMath[i];
    }
    if(sum % 2 === 0){
        console.log("The light is off.")
    }
    if(sum % 2 != 0){
        console.log("The light is on.")
    }
}

lightswitchCheck()