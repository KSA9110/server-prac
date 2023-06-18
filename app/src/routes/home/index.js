"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

router.get("/", ctrl.output.hello);
 router.get("/login", ctrl.output.login);
 router.post("/login", ctrl.process.login); //프론트가 전달한 로그인데이터를 받아서 로그인기능을 처리하는 API임.


module.exports = router;