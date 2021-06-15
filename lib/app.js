const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    console.log(request);

    const path1 = request.path;
    if(path1 === '/') {
      socket.wright (
        createResponse({
          body: 'high',
          contentType: 'plain text',
        })
      )


      }
    }
    // socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));

    //if and else statements on rubric
  });
});

module.exports = app;
