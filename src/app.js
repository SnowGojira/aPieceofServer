import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

const port = 3000;
//定义get request
app.get("/", (req, res) => {
  res.send("hello try try!");
});
//添加一个自己设置的header，status的代码
app.get("/demo", (req, res) => {
  res.set("X-full-stack", "4life");
  res.status(418);
  res.send("I prefer coffee");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
