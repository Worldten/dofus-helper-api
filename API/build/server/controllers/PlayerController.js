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

var _PlayerService = _interopRequireDefault(require("../services/PlayerService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var PlayerController = /*#__PURE__*/function () {
  function PlayerController() {
    (0, _classCallCheck2["default"])(this, PlayerController);
  }

  (0, _createClass2["default"])(PlayerController, null, [{
    key: "getAllPlayers",
    value: function () {
      var _getAllPlayers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
        var allPlayers;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                console.log("On est dans le controller");
                _context.next = 4;
                return _PlayerService["default"].getAllPlayers();

              case 4:
                allPlayers = _context.sent;

                if (allPlayers.length > 0) {
                  util.setSuccess(200, 'Players retrieved', allPlayers);
                } else {
                  util.setSuccess(200, 'No Player found');
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

      function getAllPlayers(_x, _x2) {
        return _getAllPlayers.apply(this, arguments);
      }

      return getAllPlayers;
    }()
  }, {
    key: "addPlayer",
    value: function () {
      var _addPlayer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
        var newPlayer, createdPlayer;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("On est dans le controller");

                if (req.body.player_mail) {
                  _context2.next = 4;
                  break;
                }

                util.setError(400, 'Please provide complete details');
                return _context2.abrupt("return", util.send(res));

              case 4:
                newPlayer = req.body;
                console.log(newPlayer);
                _context2.prev = 6;
                _context2.next = 9;
                return _PlayerService["default"].addPlayer(newPlayer);

              case 9:
                createdPlayer = _context2.sent;
                util.setSuccess(201, 'Player Added!', createdPlayer);
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

      function addPlayer(_x3, _x4) {
        return _addPlayer.apply(this, arguments);
      }

      return addPlayer;
    }()
  }, {
    key: "updatedPlayer",
    value: function () {
      var _updatedPlayer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var alteredPlayer, id, updatePlayer;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredPlayer = req.body;
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
                return _PlayerService["default"].updatePlayer(id, alteredPlayer);

              case 8:
                updatePlayer = _context3.sent;

                if (!updatePlayer) {
                  util.setError(404, "Cannot find Player with the id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Player updated', updatePlayer);
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

      function updatedPlayer(_x5, _x6) {
        return _updatedPlayer.apply(this, arguments);
      }

      return updatedPlayer;
    }()
  }, {
    key: "getAPlayer",
    value: function () {
      var _getAPlayer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
        var id, thePlayer;
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
                return _PlayerService["default"].getAPlayer(id);

              case 7:
                thePlayer = _context4.sent;

                if (!thePlayer) {
                  util.setError(404, "Cannot find Player with the id ".concat(id));
                } else {
                  util.setSuccess(200, 'Found Player', thePlayer);
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

      function getAPlayer(_x7, _x8) {
        return _getAPlayer.apply(this, arguments);
      }

      return getAPlayer;
    }()
  }, {
    key: "deletePlayer",
    value: function () {
      var _deletePlayer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
        var id, PlayerToDelete;
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
                return _PlayerService["default"].deletePlayer(id);

              case 7:
                PlayerToDelete = _context5.sent;

                if (PlayerToDelete) {
                  util.setSuccess(200, 'Player deleted');
                } else {
                  util.setError(404, "Player with the id ".concat(id, " cannot be found"));
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

      function deletePlayer(_x9, _x10) {
        return _deletePlayer.apply(this, arguments);
      }

      return deletePlayer;
    }()
  }]);
  return PlayerController;
}();

var _default = PlayerController;
exports["default"] = _default;
//# sourceMappingURL=PlayerController.js.map