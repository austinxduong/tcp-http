const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('transfer stuff from index.html, and bring in files', async () => {
      const actual = await request(app).get('/index.html');
      const expected = '<h1>index.html</h1>';
  },

});
