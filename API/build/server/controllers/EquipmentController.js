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

var _EquipmentService = _interopRequireDefault(require("../services/EquipmentService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var EquipmentController = /*#__PURE__*/function () {
  function EquipmentController() {
    (0, _classCallCheck2["default"])(this, EquipmentController);
  }

  (0, _createClass2["default"])(EquipmentController, null, [{
    key: "getAllEquipments",
    value: function () {
      var _getAllEquipments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allEquipments;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                console.log("On est dans le controller");
                _context.next = 4;
                return _EquipmentService["default"].getAllEquipments();

              case 4:
                allEquipments = _context.sent;

                if (allEquipments.length > 0) {
                  util.setSuccess(200, 'Equipments retrieved', allEquipments);
                } else {
                  util.setSuccess(200, 'No Equipment found');
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

      function getAllEquipments(_x, _x2) {
        return _getAllEquipments.apply(this, arguments);
      }

      return getAllEquipments;
    }()
  }, {
    key: "addEquipment",
    value: function () {
      var _addEquipment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newEquipment, createdEquipment;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("On est dans le controller");

                if (req.body.equipment_name) {
                  _context2.next = 4;
                  break;
                }

                util.setError(400, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 4:
                newEquipment = req.body;
                console.log(newEquipment);
                _context2.prev = 6;
                _context2.next = 9;
                return _EquipmentService["default"].addEquipment(newEquipment);

              case 9:
                createdEquipment = _context2.sent;
                util.setSuccess(201, 'Equipment Added!', createdEquipment);
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

      function addEquipment(_x3, _x4) {
        return _addEquipment.apply(this, arguments);
      }

      return addEquipment;
    }()
  }, {
    key: "updatedEquipment",
    value: function () {
      var _updatedEquipment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var alteredEquipment, id, updateEquipment;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredEquipment = req.body;
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
                return _EquipmentService["default"].updateEquipment(id, alteredEquipment);

              case 8:
                updateEquipment = _context3.sent;

                if (!updateEquipment) {
                  util.setError(404, "Cannot find Equipment with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Equipment updated', updateEquipment);
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

      function updatedEquipment(_x5, _x6) {
        return _updatedEquipment.apply(this, arguments);
      }

      return updatedEquipment;
    }()
  }, {
    key: "getAEquipment",
    value: function () {
      var _getAEquipment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, theEquipment;
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
                return _EquipmentService["default"].getAEquipment(id);

              case 7:
                theEquipment = _context4.sent;

                if (!theEquipment) {
                  util.setError(404, "Cannot find Equipment with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found Equipment', theEquipment);
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

      function getAEquipment(_x7, _x8) {
        return _getAEquipment.apply(this, arguments);
      }

      return getAEquipment;
    }()
  }, {
    key: "deleteEquipment",
    value: function () {
      var _deleteEquipment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, EquipmentToDelete;
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
                return _EquipmentService["default"].deleteEquipment(id);

              case 7:
                EquipmentToDelete = _context5.sent;

                if (EquipmentToDelete) {
                  util.setSuccess(200, 'Equipment deleted');
                } else {
                  util.setError(404, "Equipment with the id ".concat(id, " cannot be found"));
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

      function deleteEquipment(_x9, _x10) {
        return _deleteEquipment.apply(this, arguments);
      }

      return deleteEquipment;
    }()
  }]);
  return EquipmentController;
}();

var _default = EquipmentController;
exports["default"] = _default;
//# sourceMappingURL=EquipmentController.js.map