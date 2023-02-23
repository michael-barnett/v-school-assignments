const express = require("express")
const app = express()

app.use(express.json())

app.use('/cars', require('./routes/carRouter.js'))

app.listen(9000, () => {
    console.log("Server is running on port 9000")
})