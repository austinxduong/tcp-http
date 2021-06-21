const net = require('net');
const fs = require('fs');
const fsPromises = fs.promises;
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

// const { createDecipher } = require('crypto');
// const { create } = require('eslint/lib/rules/*');

const app = net.createServer(socket => {
  socket.on('data', async data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/index.html') {

      fsPromises.readFile('./public/index.html')
        .then((contents) =>  socket.end(createResponse({ body: contents })));

    } else {
      socket.end(createResponse({body: 'not found' }));
    }

  });
});
module.exports = app;
