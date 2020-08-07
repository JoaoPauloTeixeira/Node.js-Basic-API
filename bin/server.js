'use strict'
//IMPORTAÇÃO DOS MODULOS
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('balta:server');

const { type } = require('os');

//NORMALIZE PORT
function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//CRIANDO SERVIDOR
const server = http.createServer(app);



//LISTENING = OUVINDO O SERVIDOR
server.listen(port);
server.on('error', onError)
server.on('listening', onListening)
console.log('API rodando na porta' + port);

//TRATAMENTO DE ERROS
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privaleges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

//DEBUG && PEGANDO INFORMACOES DO SERVIDOR
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'Pipe ' + addr : 'Port ' + addr.port;

    debug('Listening on' + bind);
}