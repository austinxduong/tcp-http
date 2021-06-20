const request = require('supertest');
const app = require('../lib/app');


it('reads the contents of an index.html file', async () => {
  const res = await request(app).get('/index.html');
  expect(res.text).toEqual('<h1>I love pizza</h1>');
});
