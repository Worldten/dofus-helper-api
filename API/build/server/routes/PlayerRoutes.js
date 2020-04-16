"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _PlayerController = _interopRequireDefault(require("../controllers/PlayerController"));

var router = (0, _express.Router)();
router.get('/', _PlayerController["default"].getAllPlayers);
router.post('/', _PlayerController["default"].addPlayer);
router.get('/:id', _PlayerController["default"].getAPlayer);
router.put('/:id', _PlayerController["default"].updatedPlayer);
router["delete"]('/:id', _PlayerController["default"].deletePlayer);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=PlayerRoutes.js.map