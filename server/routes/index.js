const express = require("express");
const router = express.Router();

/**
 * @path /api/users
 */

const usersRoute = require("./users/users");
router.use("/users", usersRoute);

module.exports = router;
