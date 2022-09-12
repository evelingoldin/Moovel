const app = require('../routes/app').app;
const request = require('supertest-as-promised');
const chai = require('chai');

const expect = chai.expect;

describe('app', () => {
  describe('root route wuith agency header', () => {
    it('returns fare data as JSON', () =>
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .set('Agency', 'octa')
        .expect(200)
        .then(function (res) {
          console.log(res.body);
          expect(res.body.length).to.eq(6);;
          expect(res.body[0]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
          expect(res.body[5]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
        })
      );
  });

  // FIXME We don't have DART as a client any more and this can be removed
  // describe('dart', () => {
  //   it('returns fare data as JSON', () =>
  //     request(app)
  //       .get('/')
  //       .set('Accept', 'application/json')
  //       .set('Agency', 'dart')
  //       .expect(200)
  //     );
  //   });

  // TODO Figure out why this doesn't work RL 04/12/2014
  describe('root route with agency header', () => {
    it('returns fare data as JSON', () =>
      request(app)
        .get('/')
        .set('Accept', 'text/html')
        .set('Agency', 'sfmuni')
        .expect(200)
        .then(function (res) {
          console.log(res.body);
          expect(res.body.length).to.eq(4);;
          expect(res.body[0]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
          expect(res.body[5]).to.have.all.keys(['id', 'price', 'duration', 'rider']);
        })
      );
  });
});
