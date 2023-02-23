const express = require('express')
const movieRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const movies = [
    {title: "Lion King", year: 1998, genre: "adventure", _id: uuidv4()},
    {title: "Equalizer", year: 2004, genre: "action", _id: uuidv4()},
    {title: "Transformers", year: 2008, genre: "action", _id: uuidv4()}
]

// Get All
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

// Get One
movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

// Get by Genre
movieRouter.get("/search/genre", (req, res) => {
    const genre = req.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.send(filteredMovies)
})


// Post One
movieRouter.post("/", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send(`Added ${newMovie.title} to the DB!`)
})

// Delete One
movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send (`Successfully deleted movie.`)
})

// Update One
movieRouter.put('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], req.body)
    res.send(updatedMovie)
})

// movieRouter.route("/")
//     .get((req, res) => {
//     res.send(movies)
//     })
//     .post((req, res) => {
//         const newMovie = req.body
//         newMovie._id = uuidv4()
//         movies.push(newMovie)
//         res.send(`Added ${newMovie.title} to the DB!`)
//     })



module.exports = movieRouter