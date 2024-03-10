const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");



router.route('/userdetails').get(authMiddleware,adminControllers.getAllUsers);
router.route('/updateUserStatus/:userId').put(authMiddleware,adminControllers.changeUserStatus);
router.route('/insertMedicine').post(adminControllers.insertMedicine);
router.route('/getMedicine').get(adminControllers.getMedicine);
router.route('/getDoctor').get(adminControllers.getDoctor);

module.exports = router
