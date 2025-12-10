const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const {
  registerValidation,
} = require("../../middlewares/validation/registerValidation");

const {
  registerController,
} = require("../../controllers/user/registerController");
const {
  loginValidation,
} = require("../../middlewares/validation/loginValidation");
const { loginController } = require("../../controllers/user/loginController");

/**
 * @path /api/users/register
 */

router.post("/register", registerValidation, registerController);

/**
 * @path /api/users/login
 */

router.post("/login", loginValidation, loginController);

module.exports = router;
