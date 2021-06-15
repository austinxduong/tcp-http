module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {

  // we want to the server to respond with the content from parseRequest
  // here is where we will create the response 
  return ('HTTP/1.1 ' + status + '\n' + 'Accept-Ranges: bytes' + '\n' + 'Content-Length: 17' + '\n' + 'Content-Type: ' + contentType + '\r' + '\n' + '\r' + '\n' + body);
 
};



