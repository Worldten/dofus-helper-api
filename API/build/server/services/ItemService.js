"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var Op = _sequelize["default"].Op;

var ItemService = /*#__PURE__*/function () {
  function ItemService() {
    (0, _classCallCheck2["default"])(this, ItemService);
  }

  (0, _createClass2["default"])(ItemService, null, [{
    key: "getAllItems",
    value: function () {
      var _getAllItems = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].item.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                console.log("Erreur dans le service" + _context.t0);
                throw _context.t0;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllItems() {
        return _getAllItems.apply(this, arguments);
      }

      return getAllItems;
    }()
  }, {
    key: "addItem",
    value: function () {
      var _addItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newItem) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].item.create(newItem);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addItem(_x) {
        return _addItem.apply(this, arguments);
      }

      return addItem;
    }()
  }, {
    key: "updateItem",
    value: function () {
      var _updateItem2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, _updateItem) {
        var ItemToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].item.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                ItemToUpdate = _context3.sent;

                if (!ItemToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].item.update(_updateItem, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", _updateItem);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateItem(_x2, _x3) {
        return _updateItem2.apply(this, arguments);
      }

      return updateItem;
    }()
  }, {
    key: "getAItem",
    value: function () {
      var _getAItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var theItem;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].item.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                theItem = _context4.sent;
                return _context4.abrupt("return", theItem);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function getAItem(_x4) {
        return _getAItem.apply(this, arguments);
      }

      return getAItem;
    }()
  }, {
    key: "deleteItem",
    value: function () {
      var _deleteItem = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var ItemToDelete, deletedItem;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].item.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                ItemToDelete = _context5.sent;

                if (!ItemToDelete) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return _models["default"].item.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                deletedItem = _context5.sent;
                return _context5.abrupt("return", deletedItem);

              case 9:
                return _context5.abrupt("return", null);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }));

      function deleteItem(_x5) {
        return _deleteItem.apply(this, arguments);
      }

      return deleteItem;
    }()
  }, {
    key: "getAllNonWeapons",
    value: function () {
      var _getAllNonWeapons = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return _models["default"].item.findAll({
                  where: {
                    item_type: (0, _defineProperty2["default"])({}, Op.or, ["Bottes", "Ceinture", "Cape", "Chapeau", "Anneau", "Amulette", "Bouclier"])
                  }
                });

              case 3:
                return _context6.abrupt("return", _context6.sent);

              case 6:
                _context6.prev = 6;
                _context6.t0 = _context6["catch"](0);
                console.log("Erreur dans le service" + _context6.t0);
                throw _context6.t0;

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[0, 6]]);
      }));

      function getAllNonWeapons() {
        return _getAllNonWeapons.apply(this, arguments);
      }

      return getAllNonWeapons;
    }()
  }, {
    key: "getAllWeapons",
    value: function () {
      var _getAllWeapons = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.prev = 0;
                _context7.next = 3;
                return _models["default"].item.findAll({
                  where: {
                    item_type: (0, _defineProperty2["default"])({}, Op.or, ["Épée", "Dague", "Baguette", "Marteau", "Arc", "Pelle", "Hache", "Pioche", "Bâton", "Faux"])
                  }
                });

              case 3:
                return _context7.abrupt("return", _context7.sent);

              case 6:
                _context7.prev = 6;
                _context7.t0 = _context7["catch"](0);
                console.log("Erreur dans le service" + _context7.t0);
                throw _context7.t0;

              case 10:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[0, 6]]);
      }));

      function getAllWeapons() {
        return _getAllWeapons.apply(this, arguments);
      }

      return getAllWeapons;
    }()
  }]);
  return ItemService;
}();

var _default = ItemService;
exports["default"] = _default;
//# sourceMappingURL=ItemService.js.map