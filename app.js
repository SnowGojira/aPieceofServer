const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello try try!");
});
//添加一个自己设置的header，status的代码
//访问demo的时候会显示
app.get("/demo", (req, res) => {
  res.set("X-full-stack", "4life");
  res.status(418);
  res.send("I prefer coffee");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
