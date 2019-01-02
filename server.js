const http = require('http');
const app = require('./');
const port = process.env.PORT || 3000;
const mainSettings = require('./settings/main');

const server = http.createServer(app);

server.listen(port, mainSettings.HOST);