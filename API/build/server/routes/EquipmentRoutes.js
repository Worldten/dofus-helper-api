"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _EquipmentController = _interopRequireDefault(require("../controllers/EquipmentController"));

var router = (0, _express.Router)();
router.get('/', _EquipmentController["default"].getAllEquipments);
router.post('/', _EquipmentController["default"].addEquipment);
router.get('/:id', _EquipmentController["default"].getAEquipment);
router.put('/:id', _EquipmentController["default"].updatedEquipment);
router["delete"]('/:id', _EquipmentController["default"].deleteEquipment);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=EquipmentRoutes.js.map