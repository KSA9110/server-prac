"use strict";


//모듈
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static( __dirname + '/src/public/')); //js파일에 접근 가능하도록 정적경로를 추가
//__dirname은 app.js 파일이 있는 경로를 반환
//static : 정적인 파일이 위치할 디렉토리를 지정하는 기능?정도로 이해하기.
//백틱(``)은 ${}가 정상인식될 때 필요하다.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//.use() : 미들웨어 등록하는 메서드
app.use("/", home);

module.exports = app;