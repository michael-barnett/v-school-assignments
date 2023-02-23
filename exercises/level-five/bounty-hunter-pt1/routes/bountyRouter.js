const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    {firstName: "Han", lastName: "Solo", living: true, bounty: 5000, _id: uuidv4()},
    {firstName: "Luke", lastName: "Skywalker", living: true, bounty: 10000, _id: uuidv4()},
    {firstName: "Greedo", lastName: "UNK", living: true, bounty: 2000, _id: uuidv4()},
    {firstName: "Leia", lastName: "Organa", living: true, bounty: 15000, _id: uuidv4()},
    {firstName: "Lando", lastName: "Calrissian", living: true, bounty: 1000, _id: uuidv4()},
]

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`A new bounty has been added to the database. Their first name is ${newBounty.firstName}, their last name is ${newBounty.lastName}, and the bounty price is ${newBounty.bounty}`)
    })

bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send (`Successfully deleted bounty.`)
})

bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
})


module.exports = bountyRouter