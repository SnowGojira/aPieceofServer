"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

//middleware
app.use((0, _cors2.default)()); //跨域
app.use((0, _bodyParser.json)()); //json
app.use((0, _bodyParser.urlencoded)({ extended: true })); //url+params的粘连

var port = 3000;
//定义get request
app.get("/", function (req, res) {
  res.send("hello try try!");
});
//添加一个自己设置的header，status的代码
// app.get("/demo", (req, res) => {
//   res.set("X-full-stack", "4life");
//   res.status(418);
//   res.send("I prefer coffee");
// });

app.listen(port, function () {
  return console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map