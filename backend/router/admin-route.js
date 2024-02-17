const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");



router.route('/userdetails').get(authMiddleware,adminControllers.getAllUsers);

module.exports = router
