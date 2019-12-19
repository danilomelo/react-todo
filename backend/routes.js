const express = require('express')

module.exports = (server)=>{
    //API routes
    const routes = express.Router();
    server.use('/api', routes)

    //todo routes
    const todoService = require('./todo.service')
    todoService.register(routes, '/todos')
}