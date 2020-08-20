const express = require('express');
const DevController = require('./controllers/DevController');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: `Hello ${request.query.name}` });
  //URL: http://localhost:3333/?name=Rafael
});

routes.post('/devs', DevController.store);

module.exports = routes;
