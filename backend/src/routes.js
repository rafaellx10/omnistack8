const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: `Hello ${request.query.name}` });
  //URL: http://localhost:3333/?name=Rafael
});

routes.post('/devs', (request, response) => {
  console.log(request.body);
  return response.json({ ok: true });
  //URL(post): http://localhost:3333/devs
  // {
  //   "nome": "rafael",
  //   "email": "rafaellx10@gmai.com"
  // }
});

module.exports = routes;
