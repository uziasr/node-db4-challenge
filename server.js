const express = require('express')

const server = express();

const recipeRouter = require('./data/recipe_router/recipe-model')

server.use(express.json())
server.use('/api/router', recipeRouter)

module.exports = server;
