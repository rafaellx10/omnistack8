const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('Nova Conexão', socket.id);

  socket.on('TipoDaMsg:hello', (message) => {
    console.log(message);
  });

  setTimeout(() => {
    socket.emit('world', {
      message: 'OmniStack',
    });
  }, 4000);
});

mongoose.connect(
  'mongodb+srv://omnistack:omnistack@cluster0-chhgr.gcp.mongodb.net/omnistack8?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
