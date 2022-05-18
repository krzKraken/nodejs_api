const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth")
const { registerCtrl, loginCtrl } = require("../controllers/auth");


/**
* ? http://localhost/api/login  POST
* ? http://localhost/api/register  POST

 */
//? Registra usuario con un JWT
router.post("/register", validatorRegister, registerCtrl);

//
router.post("/login", validatorLogin, loginCtrl);

module.exports = router;
