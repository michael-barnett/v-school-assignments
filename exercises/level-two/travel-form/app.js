airlineForm = document.airlineForm

airlineForm.addEventListener('submit', function(e){
    e.preventDefault();
    const firstName = airlineForm.firstName.value;
    const lastName = airlineForm.lastName.value;
    const age = airlineForm.age.value;
    const gender = airlineForm.gender.value;
    const destination = airlineForm.destination.value
    const diet = []
    for(let i = 0; i < airlineForm.diet.length; i++){
        if(airlineForm.diet[i].checked){
            diet.push(airlineForm.diet[i].value)
        }
    }
    alert(`First name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination} \nDietary Restrictions: ${diet}`)
})