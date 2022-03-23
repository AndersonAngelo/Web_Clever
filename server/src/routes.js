const express = require('express');
const Users = require('./controllers/users.controller')

const routes = express.Router();

routes.get('/data/:id', Users.index);
routes.post('/usuarios', Users.create);

module.exports = routes;