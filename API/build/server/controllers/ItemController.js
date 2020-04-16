"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ItemService = _interopRequireDefault(require("../services/ItemService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var ItemController = /*#__PURE__*/function () {
  function ItemController() {
    (0, _classCallCheck2["default"])(this, ItemController);
  }

  (0, _createClass2["default"])(ItemController, null, [{
    key: "getAllItems",
    value: function () {
      var _getAllItems = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allItems;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                console.log("On est dans le controller");
                _context.next = 4;
                return _ItemService["default"].getAllItems();

              case 4:
                allItems = _context.sent;

                if (allItems.length > 0) {
                  util.setSuccess(200, 'Items retrieved', allItems);
                } else {
                  util.setSuccess(200, 'No Item found');
                }

                return _context.abrupt("return", util.send(res));

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0);
                return _context.abrupt("return", util.send(res));

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 9]]);
      }));

      function getAllItems(_x, _x2) {
        return _getAllItems.apply(this, arguments);
      }

      return getAllItems;
    }()
  }, {
    key: "addItem",
    value: function () {
      var _addItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newItem, createdItem;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("On est dans le controller");

                if (req.body.item_name) {
                  _context2.next = 4;
                  break;
                }

                util.setError(400, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 4:
                newItem = req.body;
                console.log(newItem);
                _context2.prev = 6;
                _context2.next = 9;
                return _ItemService["default"].addItem(newItem);

              case 9:
                createdItem = _context2.sent;
                util.setSuccess(201, 'Item Added!', createdItem);
                return _context2.abrupt("return", util.send(res));

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](6);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[6, 14]]);
      }));

      function addItem(_x3, _x4) {
        return _addItem.apply(this, arguments);
      }

      return addItem;
    }()
  }, {
    key: "updatedItem",
    value: function () {
      var _updatedItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var alteredItem, id, updateItem;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredItem = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _ItemService["default"].updateItem(id, alteredItem);

              case 8:
                updateItem = _context3.sent;

                if (!updateItem) {
                  util.setError(404, "Cannot find Item with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Item updated', updateItem);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(404, _context3.t0);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updatedItem(_x5, _x6) {
        return _updatedItem.apply(this, arguments);
      }

      return updatedItem;
    }()
  }, {
    key: "getAItem",
    value: function () {
      var _getAItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, theItem;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }

                util.setError(400, 'Please input a valid numeric value');
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _ItemService["default"].getAItem(id);

              case 7:
                theItem = _context4.sent;

                if (!theItem) {
                  util.setError(404, "Cannot find Item with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found Item', theItem);
                }

                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(404, _context4.t0);
                return _context4.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function getAItem(_x7, _x8) {
        return _getAItem.apply(this, arguments);
      }

      return getAItem;
    }()
  }, {
    key: "deleteItem",
    value: function () {
      var _deleteItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, ItemToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a numeric value');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _ItemService["default"].deleteItem(id);

              case 7:
                ItemToDelete = _context5.sent;

                if (ItemToDelete) {
                  util.setSuccess(200, 'Item deleted');
                } else {
                  util.setError(404, "Item with the id ".concat(id, " cannot be found"));
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deleteItem(_x9, _x10) {
        return _deleteItem.apply(this, arguments);
      }

      return deleteItem;
    }()
  }, {
    key: "getAllNonWeapons",
    value: function () {
      var _getAllNonWeapons = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
        var allItems;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                console.log("On est dans le controller");
                _context6.next = 4;
                return _ItemService["default"].getAllNonWeapons();

              case 4:
                allItems = _context6.sent;

                if (allItems.length > 0) {
                  util.setSuccess(200, 'Items retrieved', allItems);
                } else {
                  util.setSuccess(200, 'No Item found');
                }

                return _context6.abrupt("return", util.send(res));

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](0);
                util.setError(400, _context6.t0);
                return _context6.abrupt("return", util.send(res));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 9]]);
      }));

      function getAllNonWeapons(_x11, _x12) {
        return _getAllNonWeapons.apply(this, arguments);
      }

      return getAllNonWeapons;
    }()
  }, {
    key: "getAllWeapons",
    value: function () {
      var _getAllWeapons = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
        var allItems;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                console.log("On est dans le controller");
                _context7.next = 4;
                return _ItemService["default"].getAllWeapons();

              case 4:
                allItems = _context7.sent;

                if (allItems.length > 0) {
                  util.setSuccess(200, 'Items retrieved', allItems);
                } else {
                  util.setSuccess(200, 'No Item found');
                }

                return _context7.abrupt("return", util.send(res));

              case 9:
                _context7.prev = 9;
                _context7.t0 = _context7["catch"](0);
                util.setError(400, _context7.t0);
                return _context7.abrupt("return", util.send(res));

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 9]]);
      }));

      function getAllWeapons(_x13, _x14) {
        return _getAllWeapons.apply(this, arguments);
      }

      return getAllWeapons;
    }()
  }]);
  return ItemController;
}();

var _default = ItemController;
exports["default"] = _default;
//# sourceMappingURL=ItemController.js.map