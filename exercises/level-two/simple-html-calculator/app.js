const addForm = document['form-add']
const subForm = document['form-subtract']
const multForm = document['form-multiply']

addForm.addEventListener("submit", function(e){
    e.preventDefault();
    const firstNum = parseInt(addForm.firstAdd.value);
    const secondNum = parseInt(addForm.secondAdd.value);
    const sum = firstNum + secondNum;
    const h3 = document.createElement('h3');
    const addDiv = document.getElementById('addDiv')
    h3.textContent = sum
    addDiv.append(h3)
})

subForm.addEventListener("submit", function(e){
    e.preventDefault();
    const firstNum = subForm.firstSubtract.value;
    const secondNum = subForm.secondSubtract.value;
    const sub = firstNum - secondNum;
    const h3 = document.createElement('h3');
    const addDiv = document.getElementById('subDiv')
    h3.textContent = sub
    addDiv.append(h3)
})

multForm.addEventListener("submit", function(e){
    e.preventDefault();
    const firstNum = multForm.firstMultiply.value;
    const secondNum = multForm.secondMultiply.value;
    const sub = firstNum * secondNum;
    const h3 = document.createElement('h3');
    const addDiv = document.getElementById('multDiv')
    h3.textContent = sub
    addDiv.append(h3)
})