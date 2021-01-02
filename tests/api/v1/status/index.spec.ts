import * as supertest from 'supertest';
import * as qs from 'qs';
import * as express from 'express';
let config = require(__dirname + '/../../../../src/cfg/index.ts').default,
  version = require(__dirname + '/../../../../src/api/v1/index.ts'),
  url = config.baseurl + ':' + config.api.port,
  app = express(),
  api = supertest(app);
//  data = require(__dirname + '/../../../../data');

describe('status#index', () => {
  it('Check server modules are up & running', done => {
    api
      .get('/status')
      .expect(200)
      .end((err, res) => {
        // expect(typeof res.body).toBe('object');
        // expect(res.body).toHaveProperty('status');
        done();
      });
  });

  it('Check server modules are up & running without get request', done => {
    api
      .post('/status')
      .expect(404)
      .end((err, res) => {
        // expect(res.body.status).toBe(404);
        done();
      });
  });
});
