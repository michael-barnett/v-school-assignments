const express = require('express')
const middleware = express.Router()
const app = express()


middleware.get('/', (req, res, next) => {
    req.body = {size: 'small'}
    next()
})

module.exports = middleware