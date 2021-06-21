const request = require('supertest');
const app = require('../lib/app');


describe('promise routes', () => {
  test('/index.html, GET content from index.html file under public directory', async() => {

    const res = await request(app)
      .get('/index.html');

    expect(res.text).toEqual('<h1>I love pizza</h1>');
    expect(res.status).toEqual(200);                 
  });

  test.skip('/index, return 404 Not Found error', async() => {

    const res = await request(app)
      .get('/index.');

    expect(res.text).toEqual('Not Found');
  });
});
