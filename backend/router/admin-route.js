const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-middleware");



router.route('/userdetails').get(authMiddleware,adminControllers.getAllUsers);
router.route('/medicinedetails').get(authMiddleware,adminControllers.getAllMedicines);
router.route('/medicinedetails/:id').get(adminControllers.getOneMedicines);
router.route('/updatetMedicine/:id').put(adminControllers.updateMedicines);
router.route('/updateUserStatus/:userId').put(authMiddleware,adminControllers.changeUserStatus);
router.route('/insertMedicine').post(adminControllers.insertMedicine);
router.route('/getMedicine').get(adminControllers.getMedicine);
router.route('/getDoctor').get(adminControllers.getDoctor);
router.route('/getOneUser/:id').get(adminControllers.getOneUser);
router.route('/updateUser/:id').put(adminControllers.updateUser);
router.route('/appointmentDetails').get(authMiddleware,adminControllers.getAllAppointments);
router.route('/getFutureAppointmentsForOneUser/:id').get(adminControllers.getFutureAppointmentsForOneUser);
router.route('/totalCountPatients').get(adminControllers.totalCountPatients);
router.route('/totalCountDoctors').get(adminControllers.totalCountDoctors);
router.route('/totalCountAppointments').get(adminControllers.totalCountAppointments);




module.exports = router
