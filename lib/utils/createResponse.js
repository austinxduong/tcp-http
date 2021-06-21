module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {

  // we want to the server to respond with the content from parseRequest
  // here is where we will create the response 
  return (`HTTP/1.1 ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}\r
\r
${body}`);
};




