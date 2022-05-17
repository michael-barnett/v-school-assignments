const goombaNum = document.getElementById("goombaNum")
const koopaNum = document.getElementById("koopaNum")
const bobNum = document.getElementById("bobNum")
const coinTotal = document.getElementById('coinTotal')
const subButton = document.getElementById('subButton')
const total = document.getElementById('total')
console.log(subButton)
total.addEventListener("submit", function(event){
    event.preventDefault();
    coinTotal.textContent = ((parseInt(goombaNum.value) * 5) + (parseInt(koopaNum.value) * 11) + (parseInt(bobNum.value) * 7) + ' coins');
})

