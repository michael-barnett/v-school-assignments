const express = require('express');
const carRouter = express.Router()


const cars = [
    {make: 'Toyota', model: 'Tacoma', year: 2021, type: 'Truck'},
    {make: 'Toyota', model: '4Runner', year: 1998, type: 'Truck'},
    {make: 'Nissan', model: 'Frontier', year: 2018, type: 'Truck'},
    {make: 'Honda', model: 'civic', year: 2001, type: 'car'},
    {make: 'Nissan', model: '350z', year: 2018, type: 'sports car'}
]


// carRouter.get("/", (req, res) => {
//     res.send(cars)
// })

carRouter.get('/', (req, res) => {
    if (req.query.make === undefined) {
        console.log(req)
        res.send(cars)
    }
    else {
        console.log(req.query)
        const make = req.query.make
        const filteredCars = cars.filter(car => car.make === make)
        res.send(filteredCars)}
})







module.exports = carRouter