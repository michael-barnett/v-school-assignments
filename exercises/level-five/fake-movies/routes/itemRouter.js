const express = require('express')
const itemRouter = express.Router()
const app = express()


itemRouter.get('/', (req, res, next) => {
    console.log('please work')
    next()
})

module.exports = itemRouter