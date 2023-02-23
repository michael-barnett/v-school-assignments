const express = require('express')
const tvRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const tvShows = [
    {title: "Big Bang Theory", rating: "3.2 Stars", _id: uuidv4()},
    {title: "True Detective", rating: "4.3 Stars", _id: uuidv4()},
    {title: "The Last of Us", rating: "4.7 Stars", _id: uuidv4()}
]

tvRouter.get("/", (req, res) => {
    res.send(tvShows)
})

tvRouter.get("/:showId", (req, res) => {
    const foundShow =  tvShows.find(show => show._id === req.params.showId)
    res.send(foundShow)
})

tvRouter.post("/", (req, res) => {
    const newShow = req.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    res.send(`Added ${newShow} to the database.`)
})



module.exports = tvRouter