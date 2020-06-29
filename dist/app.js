"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var contentJsonObj = {
  works: [{
    id: 1,
    title: "ASSEMBLE工作室",
    desc: "",
    type: "all",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/assemble.jpg",
    link: "https://mp.weixin.qq.com/s/P4IyN2P6l8fdOCHvzRlAzQ"
  }, {
    id: 2,
    title: "财新网环保H5",
    desc: "测试类H5，使用CSS-animation，jQuery",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/caixin_hb.jpg",
    link: "http://.../cases/caixin/"
  }, {
    id: 3,
    title: "方正字体周年庆H5",
    desc: "方正三十周年开发的游戏，使用CreateJs",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/caixin_fz.jpg",
    link: "http://www.hakugaki.xyz/cases/founder-h5/"
  }, {
    id: 4,
    title: "田晓磊线上展",
    desc: "艺术家合作的GIF展厅，使用jQuery",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/crosslab_txl.jpg",
    link: "http://.../cases/txl/"
  }, {
    id: 5,
    title: "孙玮线上展",
    desc: "艺术家合作的声音装置，使用jQuery",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/crosslab_sw.jpg",
    link: "http://.../cases/sw/"
  }, {
    id: 6,
    title: "破碎的咖啡豆",
    desc: "与小伙伴开发的笔触，使用webgl",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lab_3d.jpg",
    link: "http://.../cases/crash-bean/"
  }, {
    id: 7,
    title: "音画实验，微信浏览器不支持",
    desc: "audioContext，手机电脑端的safari和chrome都可",
    type: "all",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lab_music.jpg",
    link: "http://.../cases/music/"
  }, {
    id: 8,
    title: "vr电脑端作品,手机不支持",
    desc: "vr视频分镜引擎，使用vrjs",
    type: "all",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lab_vr.jpg",
    link: "http://.../cases/vr/video.html"
  }, {
    id: 9,
    title: "清单双十一H5",
    desc: "清单公众号双十一滚屏后H5，使用ih5，js开发",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/qingdan_eleven.jpg",
    link: "https://file6ed47637403a.vrh5.cn/v3/idea/TLwq67ED"
  }, {
    id: 10,
    title: "网易双十二H5",
    desc: "网易的测试类作品，使用canvas，jQuery开发",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/netease_ym.jpg",
    link: "http://.../cases/lightening/"
  }, {
    id: 11,
    title: "草莓音乐节（工具类精选的top6）",
    desc: "",
    type: "all",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/strawberry.jpg",
    link: "https://mp.weixin.qq.com/s/ffRy63nXxCDL9NiS9yYdaQ"
  }, {
    id: 12,
    title: "原画册官方网站",
    desc: "",
    type: "all",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/web_oa.jpg",
    link: "http://.../cases/original-album/"
  }, {
    id: 13,
    title: "强迫症实验室",
    desc: "实验小作品，主要是motion-design",
    type: "phone",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lab_ob.jpg",
    link: "http://.../cases/ocd/"
  }, {
    id: 14,
    title: "成都到底有多浪",
    desc: "",
    type: "all",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lab_cd.jpg",
    link: "https://mp.weixin.qq.com/s/RVaJjqOmhjgs39gLqqJaxw"
  }, {
    id: 15,
    title: "说唱为什么会在四川崛起",
    desc: "地方语言与歌曲的数据实验",
    type: "all",
    thumbnail: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/lab_ch.jpg",
    link: "https://mp.weixin.qq.com/s/Ps2GFkWLUrl9X4zvldGW6Q"
  }],
  intro: {
    avatar: "https://haku-1252507164.cos.ap-nanjing.myqcloud.com/assemble.jpg"
  }
};
var app = (0, _express["default"])(); //middleware

app.use((0, _cors["default"])()); //跨域

app.use((0, _bodyParser.json)()); //json

var port = process.env.PORT || 3800; //定义get request

app.get("/api/works", function (req, res) {
  res.send(contentJsonObj.works);
});
app.get("/api/works/:id", function (req, res) {
  var result = contentJsonObj.works.find(function (item) {
    return item.id == parseInt(req.params.id);
  });

  if (!result) {
    res.status(404).send("the id your request is not valid");
  } else {
    res.send(result);
  }
});
app.get("/api/intro", function (req, res) {
  res.send(contentJsonObj.intro);
}); //处理vue单页的route

if (process.env.NODE_ENV === "production") {
  //Static folder
  app.use(_express["default"]["static"](__dirname + "/public")); //handle Single page app

  app.get(/.*/, function (req, res) {
    return res.sendFile(__dirname + "/public/index.html");
  });
}

app.listen(port, function () {
  return console.log("Example app listening at http://localhost:".concat(port));
});