const express = require('express');

const server = express();

server.get('/', (request, response) => {
  return response.send(`Hello ${request.query.name}`);
  //URL: http://localhost:3333/?name=Rafael
});

server.listen(3333);
