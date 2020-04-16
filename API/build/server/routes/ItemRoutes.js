"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ItemController = _interopRequireDefault(require("../controllers/ItemController"));

var router = (0, _express.Router)();
router.get('/', _ItemController["default"].getAllItems);
router.post('/', _ItemController["default"].addItem);
router.get('/stuff', _ItemController["default"].getAllNonWeapons);
router.get('/weapons', _ItemController["default"].getAllWeapons);
router.get('/:id', _ItemController["default"].getAItem);
router.put('/:id', _ItemController["default"].updatedItem);
router["delete"]('/:id', _ItemController["default"].deleteItem);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=ItemRoutes.js.map