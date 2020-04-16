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

var _models = _interopRequireDefault(require("../src/models"));

var PlayerService = /*#__PURE__*/function () {
  function PlayerService() {
    (0, _classCallCheck2["default"])(this, PlayerService);
  }

  (0, _createClass2["default"])(PlayerService, null, [{
    key: "getAllPlayers",
    value: function () {
      var _getAllPlayers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].player.findAll();

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

      function getAllPlayers() {
        return _getAllPlayers.apply(this, arguments);
      }

      return getAllPlayers;
    }()
  }, {
    key: "addPlayer",
    value: function () {
      var _addPlayer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(newPlayer) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].player.create(newPlayer);

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

      function addPlayer(_x) {
        return _addPlayer.apply(this, arguments);
      }

      return addPlayer;
    }()
  }, {
    key: "updatePlayer",
    value: function () {
      var _updatePlayer2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id, _updatePlayer) {
        var PlayerToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].player.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                PlayerToUpdate = _context3.sent;

                if (!PlayerToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].player.update(_updatePlayer, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", _updatePlayer);

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

      function updatePlayer(_x2, _x3) {
        return _updatePlayer2.apply(this, arguments);
      }

      return updatePlayer;
    }()
  }, {
    key: "getAPlayer",
    value: function () {
      var _getAPlayer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
        var thePlayer;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].player.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                thePlayer = _context4.sent;
                return _context4.abrupt("return", thePlayer);

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

      function getAPlayer(_x4) {
        return _getAPlayer.apply(this, arguments);
      }

      return getAPlayer;
    }()
  }, {
    key: "deletePlayer",
    value: function () {
      var _deletePlayer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
        var PlayerToDelete, deletedPlayer;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].player.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                PlayerToDelete = _context5.sent;

                if (!PlayerToDelete) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return _models["default"].player.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                deletedPlayer = _context5.sent;
                return _context5.abrupt("return", deletedPlayer);

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

      function deletePlayer(_x5) {
        return _deletePlayer.apply(this, arguments);
      }

      return deletePlayer;
    }()
  }]);
  return PlayerService;
}();

var _default = PlayerService;
exports["default"] = _default;
//# sourceMappingURL=PlayerService.js.map