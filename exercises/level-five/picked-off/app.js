const express = require('express')
const app = express()

app.use(express.json())

const bird = {
    name: 'bluebird',
    color: 'blue'
}

app.use('/birds', (req, res, next) => {
    res.send(bird)
    next()
})

app.use('/birds', require('./routes/middleware.js'))

app.use('/birds', (req, res) => {
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("Server up and running on port 9000.")
})