module.exports = rawRequest => {

  const data = rawRequest.toString(); 

  const method1 = data.split('\n')[0].split(' ')[0];

  const path1 = rawRequest.split('\n')[0].split(' ')[1];

  const body1 = rawRequest.split('\n')[4];

  return {
    method: method1,
    path: path1,
    body: body1
  };


};


// // { method: 'GET', path: '/dog', body: { name: 'spot' } }
// const req = parseRequest(data.toString())
// connectedClient.write(createResponse({
//   body: { name: 'spot' },
//   contentType: 'application/json',
//   status: '200 OK'
// }));
// };
