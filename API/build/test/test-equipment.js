"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing the equipment endpoints:', function () {
  it('It should create an equipment', function (done) {
    var equipment = {
      id: -1,
      equipment_name: "Test",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null
    };

    _chai["default"].request(_index["default"]).post('/api/v1/equipments').set('Accept', 'application/json').send(equipment).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: -1,
        equipment_name: equipment.equipment_name,
        player_id: null
      });
      done();
    });
  });
  it('It should not create an equipment with incomplete parameters', function (done) {
    var equipment = {
      equipment_items: {},
      equipment_recipe: {},
      player_id: null
    };

    _chai["default"].request(_index["default"]).post('/api/v1/equipments').set('Accept', 'application/json').send(equipment).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all equipments', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/equipments').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('equipment_name');
      res.body.data[0].should.have.property('equipment_items');
      res.body.data[0].should.have.property('equipment_recipe');
      res.body.data[0].should.have.property('player_id');
      done();
    });
  });
  it('It should get a particular equipment', function (done) {
    var equipmentId = 1;

    _chai["default"].request(_index["default"]).get("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('equipment_name');
      res.body.data.should.have.property('equipment_items');
      res.body.data.should.have.property('equipment_recipe');
      res.body.data.should.have.property('player_id');
      done();
    });
  });
  it('It should not get a particular equipment with invalid id', function (done) {
    var equipmentId = -2;

    _chai["default"].request(_index["default"]).get("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find Equipment with the id ".concat(equipmentId));
      done();
    });
  });
  it('It should not get a particular equipment with non-numeric id', function (done) {
    var equipmentId = 'aaa';

    _chai["default"].request(_index["default"]).get("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should update a equipment', function (done) {
    var equipmentId = -1;
    var updatedequipment = {
      id: equipmentId,
      equipment_name: "TestUpdate",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null
    };

    _chai["default"].request(_index["default"]).put("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').send(updatedequipment).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.id).equal(updatedequipment.id);
      expect(res.body.data.equipment_name).equal(updatedequipment.equipment_name);
      expect(res.body.data.player_id).equal(updatedequipment.player_id);
      done();
    });
  });
  it('It should not update a equipment with invalid id', function (done) {
    var equipmentId = '-2';
    var updatedequipment = {
      id: equipmentId,
      equipment_name: "TestUpdate failed",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null
    };

    _chai["default"].request(_index["default"]).put("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').send(updatedequipment).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find Equipment with the id: ".concat(equipmentId));
      done();
    });
  });
  it('It should not update a equipment with non-numeric id value', function (done) {
    var equipmentId = 'ggg';
    var updatedequipment = {
      id: equipmentId,
      equipment_name: "TestUpdate failed",
      equipment_items: {},
      equipment_recipe: {},
      player_id: null
    };

    _chai["default"].request(_index["default"]).put("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').send(updatedequipment).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should delete a equipment', function (done) {
    var equipmentId = -1;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a equipment with invalid id', function (done) {
    var equipmentId = -2;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Equipment with the id ".concat(equipmentId, " cannot be found"));
      done();
    });
  });
  it('It should not delete a equipment with non-numeric id', function (done) {
    var equipmentId = 'bbb';

    _chai["default"].request(_index["default"])["delete"]("/api/v1/equipments/".concat(equipmentId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please provide a numeric value');
      done();
    });
  });
});
//# sourceMappingURL=test-equipment.js.map