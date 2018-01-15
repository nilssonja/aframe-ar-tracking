const express_starter = require('express-starter');

express_starter.start(3000, (express, app, io) => {
  app.use(express.static('./src'));
});