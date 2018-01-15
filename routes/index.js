const Path = require('path');

exports.config = {
  routes: {
    get: {
      '/socket.io.js': (req, res) => {
        const path = Path.resolve(__dirname, '../node_modules/socket.io-client/dist/socket.io.js');
        res.sendFile(path);
      }
    }
  },
  socketEvents: {
    connection() {
      console.log('got a connection from object config!');
    },
    debug(io, socket, msg) {
      console.log(msg);
    },
    disconnect() {
      console.log('got a disconnection from object config!');
    }
  }
};