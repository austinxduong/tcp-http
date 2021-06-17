const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const { createDecipher } = require('crypto');
const { create } = require('eslint/lib/rules/*');

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


//DESIGN PLAN

// 1. create failing test
//   - .get controller communicates inside index.html

// 2. Not Found message is create. then create second 2 test. 
//   - is living in file path

// 3. Bring and transfer API inside app.js

// 4. index.html file create

// 5. now we create controller route like pizza lab

// 6. 