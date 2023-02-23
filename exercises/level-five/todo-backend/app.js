const express = require("express")
const app = express()


app.use(express.json())




app.use("/todos", require("./routes/todoRouter.js"))




app.listen(9000, () => {
    console.log("Server is up and running on port 9000.")
})