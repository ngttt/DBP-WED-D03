var express = require("express");
var router = express.Router();

const checkLogin = require("../controllers/login.controller");

router.post("/", checkLogin.postLogin);

module.exports = router;
