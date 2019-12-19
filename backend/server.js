const express = require('express')
const bodyParser = require('body-parser')

const server = express();

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(require('./cors'))
server.listen(3003)

module.exports = server;