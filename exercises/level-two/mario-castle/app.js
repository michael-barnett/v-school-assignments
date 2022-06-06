class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked) {
        if (namePicked === 'Mario'){
            this.name = 'Mario'
        } else {this.name = 'Luigi'}
    }
    gotHit(){
        if (this.status === 'small'){
            this.status = 'dead'
        }
        if (this.status === 'big'){
            this.status = 'small'
        }
        if (this.status === 'powered up'){
            this.status = 'big'
        }
    }
    gotPowerup(){
        if (this.status === 'big'){
            this.status = 'powered up'
        }
        else if (this.status === 'small'){
            this.status = 'big'
        } else this.hasStar = true
    }
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(`Name: ${this.name}\nTotal coins: ${this.totalCoins}\nStatus: ${this.status}\nHas a star: ${this.hasStar}`)
    }
}
const player = new Player('Eric', 0, 'small', false)

let intervalId = setInterval(getRandomInt, 1000)
function stopinterval(){
    clearInterval(intervalId)
}

function getRandomInt(){
    min = Math.ceil(0);
    max = Math.floor(2);
    let chance = Math.floor(Math.random() * (max - min + 1)) + min;
    if (chance === 0){
        player.gotHit()
    }
    if (chance === 1){
        player.gotPowerup()
    }
    if (chance === 2){
        player.addCoin()
    }
    // if (player.status === 'dead'){
    //     console.log("You died");
    //     process.exit()
    // }
    if (player.status === 'dead'){
        stopinterval()
    }
    return player.print()
}

// function stopinterval(){
//     clearInterval(intervalId)
// }

// if (player.status === 'dead'){
//     stopinterval
// }