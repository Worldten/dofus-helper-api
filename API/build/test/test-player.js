"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing the player endpoints:', function () {
  it('It should create a player', function (done) {
    var player = {
      id: 4,
      player_mail: "thomaszim@free.fr",
      player_pwd: "thomas",
      player_username: "WorldtenTest",
      player_jobs: {
        "Bucheron": 100,
        "Alchimiste": 66
      },
      player_characters: {

      }
    };

    _chai["default"].request(_index["default"]).post('/api/v1/players').set('Accept', 'application/json').send(player).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: 1,
        player_mail: player.player_mail,
        player_pwd: player.player_pwd,
        player_username: player.player_username
      });
      done();
    });
  });
  it('It should not create a player with incomplete parameters', function (done) {
    var player = {
      player_pwd: "thomas",
      player_username: "Worldten",
      player_jobs: {},
      player_characters: {}
    };

    _chai["default"].request(_index["default"]).post('/api/v1/players').set('Accept', 'application/json').send(player).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all players', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/players').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('player_mail');
      res.body.data[0].should.have.property('player_pwd');
      res.body.data[0].should.have.property('player_username');
      res.body.data[0].should.have.property('player_confirmedmail');
      res.body.data[0].should.have.property('player_jobs');
      res.body.data[0].should.have.property('player_characters');
      done();
    });
  });
  it('It should get a particular player', function (done) {
    var playerId = 1;

    _chai["default"].request(_index["default"]).get("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('player_mail');
      res.body.data.should.have.property('player_pwd');
      res.body.data.should.have.property('player_username');
      res.body.data.should.have.property('player_confirmedmail');
      res.body.data.should.have.property('player_jobs');
      res.body.data.should.have.property('player_characters');
      done();
    });
  });
  it('It should not get a particular player with invalid id', function (done) {
    var playerId = -2;

    _chai["default"].request(_index["default"]).get("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find Player with the id ".concat(playerId));
      done();
    });
  });
  it('It should not get a particular player with non-numeric id', function (done) {
    var playerId = 'aaa';

    _chai["default"].request(_index["default"]).get("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should update a player', function (done) {
    var playerId = 1;
    var updatedplayer = {
      id: playerId,
      player_mail: "thomaszim@free.fr",
      player_pwd: "thomas",
      player_username: "Worldten",
      player_jobs: {},
      player_characters: {}
    };

    _chai["default"].request(_index["default"]).put("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').send(updatedplayer).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.id).equal(updatedplayer.id);
      expect(res.body.data.player_mail).equal(updatedplayer.player_mail);
      expect(res.body.data.player_pwd).equal(updatedplayer.player_pwd);
      expect(res.body.data.player_username).equal(updatedplayer.player_username);
      done();
    });
  });
  it('It should not update a player with invalid id', function (done) {
    var playerId = '-2';
    var updatedplayer = {
      id: playerId,
      player_pwd: "thomas",
      player_username: "Worldten"
    };

    _chai["default"].request(_index["default"]).put("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').send(updatedplayer).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find Player with the id: ".concat(playerId));
      done();
    });
  });
  it('It should not update a player with non-numeric id value', function (done) {
    var playerId = 'ggg';
    var updatedplayer = {
      id: playerId,
      player_pwd: "thomas",
      player_username: "Worldten",
      player_jobs: {},
      player_characters: {}
    };

    _chai["default"].request(_index["default"]).put("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').send(updatedplayer).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should delete a player', function (done) {
    var playerId = 1;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a player with invalid id', function (done) {
    var playerId = -2;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Player with the id ".concat(playerId, " cannot be found"));
      done();
    });
  });
  it('It should not delete a player with non-numeric id', function (done) {
    var playerId = 'bbb';

    _chai["default"].request(_index["default"])["delete"]("/api/v1/players/".concat(playerId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please provide a numeric value');
      done();
    });
  });
});
//# sourceMappingURL=test-player.js.map