require('dotenv').config();
const app = require('./app');
const debug = require('debug')('node-angular');
const http = require('http');
const fs = require('fs');
const https = require('https');

const isHttpsEnabled = process.env.CONN_MODE
  ? process.env.CONN_MODE === 'HTTPS'
  : false;

const server = http.createServer(app);

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port; // eslint-disable-line
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + port;
  debug('Listening on ' + bind);
};

const port = normalizePort(process.env.PORT || process.env.STARTPORT);
app.set('port', port);

if (isHttpsEnabled) {
  const key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
  const cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
  const options = {
    key: key,
    cert: cert,
  };
  const httpsServer = https.createServer(options, app);

  console.log('HTTPS server up on port ', port);
  httpsServer.listen(port);
} else {
  server.on('error', onError);
  server.on('listening', onListening);
  console.log('HTTP server up on port ', port);
  server.listen(port);
}
