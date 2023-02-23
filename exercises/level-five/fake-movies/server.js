const express = require("express")
const app = express()

app.use(express.json())

app.use('/movies', require("./routes/movieRouter.js"))
app.use('/shows', require("./routes/tvRouter.js"))

app.use("/items", (req, res, next) => {
    console.log("Items middleware was executed")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = {name: "Rick"}
    next()
})

app.use("/items", (req, res, next) => {
    console.log("Get request received")
    res.send(req.body)
    next()
})

app.use("/items", require("./routes/itemRouter.js"))

app.listen(9000, () => {
    console.log("Server is running on Port 9000.")
})