"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

var _PlayerRoutes = _interopRequireDefault(require("./server/routes/PlayerRoutes"));

var _EquipmentRoutes = _interopRequireDefault(require("./server/routes/EquipmentRoutes"));

var _ItemRoutes = _interopRequireDefault(require("./server/routes/ItemRoutes"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var cors = require('cors');

var app = (0, _express["default"])();
app.use(cors());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 8000;
app.use('/api/v1/players', _PlayerRoutes["default"]);
app.use('/api/v1/equipments', _EquipmentRoutes["default"]);
app.use('/api/v1/items', _ItemRoutes["default"]); // when a random route is inputed

app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to this API.'
  });
});
app.listen(port, function () {
  console.log("Server is running on PORT ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map