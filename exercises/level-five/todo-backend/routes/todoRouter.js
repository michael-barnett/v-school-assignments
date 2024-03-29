const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const todos = [
    {
        name: "Work out",
        description: "Work out for at least 45 minutes.",
        complete: false,
        _id: uuidv4()
    },
    {
        name: "Read",
        description: "Read at least 10 pages today.",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Drink water",
        description: "Drink at least one gallon of water today.",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Shop for groceries",
        description: "You need some food. Go get some from the new publix!",
        completed: false,
        _id: uuidv4()
    }
]

todoRouter.get('/', (req, res) => {
    res.send(todos)
})

todoRouter.get('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    res.send(todos.find(todo => todo._id === todoId))
})

todoRouter.post('/', (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} to the todo list.`)
})

todoRouter.put('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

todoRouter.delete('/:todoId', (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted to-do from list.")
})

module.exports = todoRouter