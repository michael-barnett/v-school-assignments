// function Car(make, model, year, honkSound){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.honkSound = honkSound
//     this.honk = function(){
//         console.log(this.honkSound)
//     }
// }

// var jeep = new Car("Jeep", "Cherokee", 2001, 'SKRRRTBAP')
// var mazda = new Car("Mazda", '3 hatchback', 2015, "WEEEEEEEYAAH")
// console.log(jeep)
// console.log(mazda)

// jeep.honk()
// mazda.honk()

let employees = []

function Employee(name, jobTitle, salary, status = 'Full Time'){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
        console.log("Name: " + name + ";" + " Job Title: " + jobTitle + ";" + " Salary: " + salary + ";" + " Job Status: "  + status + ";")
    }
}

const bill = new Employee('Bill', 'Accountant', '$12/hr')
const carl = new Employee('Carl', 'Sys Admin', '$20/hr', 'Contract')

bill.printEmployeeForm()
carl.printEmployeeForm()
employees.push(bill, carl)
console.log(employees)