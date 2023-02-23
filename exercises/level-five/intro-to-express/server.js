const express = require("express")
const app = express()

// Middleware (for every request) //
app.use(express.json())


//servers listen for a request and wait to send a response

//function given to us by express, needs two arguments. Needs PORT and CB.
app.listen(9000, () => {
    console.log("Server is workin, yo! and it's on port 9k.")
})

// CTRL +  C stops the server running on the terminal.

/*

There are multiple PORTS on your computer. Create React App runs on 3000. You normally want to be between 3000 and 9000.
Ports are what your server runs on. When the server is running, we can create routes which go to certain endpoints.

A ROUTE is like an event listener. It listens for http requests, get put post delete. It gets triggered in certain cicumstances. WE then customize what it listens for in certain
instances.

An endpoint is a part of the url. such as /item, /user, /login. You get the drill. 

*/
// First argument is the endpoint (mount path)
// second argument is the callback function


const users = [
    {name: "joe", age: 25},
    {name: "bill", age:22},
    {name: "jimmy", age: 18}
]

app.get("/users", (req, res) => {
    res.send(users)
})

app.post("/users", (req, res) => {
    const newUser = req.body
    users.push(newUser)
    res.send(`Successfully added ${newUser.name} to the database.`)
})