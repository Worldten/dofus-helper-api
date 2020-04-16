"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _index = _interopRequireDefault(require("../index"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing the item endpoints:', function () {
  it('It should create an item', function (done) {
    var item = {
      id: -1,
      item_id: 0,
      item_name: "Test",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe: {
        "Pépite": {
          "item_id": 0,
          "item_image": "url",
          "item_level": 0,
          "quantity": 0
        }
      }
    };

    _chai["default"].request(_index["default"]).post('/api/v1/items').set('Accept', 'application/json').send(item).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: item.id,
        item_id: item.item_id,
        item_name: item.item_name,
        item_level: item.item_level,
        item_type: item.item_type,
        item_image: item.item_image
      });
      done();
    });
  });
  it('It should not create an item with incomplete parameters', function (done) {
    var item = {
      id: -1,
      item_name: "Test",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe: {}
    };

    _chai["default"].request(_index["default"]).post('/api/v1/items').set('Accept', 'application/json').send(item).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all items', function (done) {
    _chai["default"].request(_index["default"]).get('/api/v1/items').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('item_id');
      res.body.data[0].should.have.property('item_level');
      res.body.data[0].should.have.property('item_type');
      res.body.data[0].should.have.property('item_image');
      res.body.data[0].should.have.property('item_recipe');
      done();
    });
  });
  it('It should get a particular item', function (done) {
    var itemId = -1;

    _chai["default"].request(_index["default"]).get("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('item_id');
      res.body.data.should.have.property('item_level');
      res.body.data.should.have.property('item_type');
      res.body.data.should.have.property('item_image');
      res.body.data.should.have.property('item_recipe');
      done();
    });
  });
  it('It should not get a particular item with invalid id', function (done) {
    var itemId = -2;

    _chai["default"].request(_index["default"]).get("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find Item with the id ".concat(itemId));
      done();
    });
  });
  it('It should not get a particular item with non-numeric id', function (done) {
    var itemId = 'aaa';

    _chai["default"].request(_index["default"]).get("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should update a item', function (done) {
    var itemId = -1;
    var updateditem = {
      id: itemId,
      item_id: -1,
      item_name: "TestUpdate",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe: {}
    };

    _chai["default"].request(_index["default"]).put("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').send(updateditem).end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.id).equal(updateditem.id);
      expect(res.body.data.item_id).equal(updateditem.item_id);
      expect(res.body.data.item_name).equal(updateditem.item_name);
      expect(res.body.data.item_level).equal(updateditem.item_level);
      expect(res.body.data.item_type).equal(updateditem.item_type);
      expect(res.body.data.item_image).equal(updateditem.item_image);
      done();
    });
  });
  it('It should not update a item with invalid id', function (done) {
    var itemId = '9999';
    var updateditem = {
      id: itemId,
      item_id: -1,
      item_name: "TestUpdate",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe: {}
    };

    _chai["default"].request(_index["default"]).put("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').send(updateditem).end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find Item with the id: ".concat(itemId));
      done();
    });
  });
  it('It should not update a item with non-numeric id value', function (done) {
    var itemId = 'ggg';
    var updateditem = {
      id: itemId,
      item_id: -1,
      item_name: "TestUpdate",
      item_level: 0,
      item_type: "Epee",
      item_image: "url",
      item_recipe: {}
    };

    _chai["default"].request(_index["default"]).put("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').send(updateditem).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please input a valid numeric value');
      done();
    });
  });
  it('It should delete a item', function (done) {
    var itemId = -1;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a item with invalid id', function (done) {
    var itemId = -2;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Item with the id ".concat(itemId, " cannot be found"));
      done();
    });
  });
  it('It should not delete a item with non-numeric id', function (done) {
    var itemId = 'bbb';

    _chai["default"].request(_index["default"])["delete"]("/api/v1/items/".concat(itemId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please provide a numeric value');
      done();
    });
  });
});
//# sourceMappingURL=test-item.js.map