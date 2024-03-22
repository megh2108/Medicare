
const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth-controller");
const authMiddleware = require("../middlewares/auth-middleware");
//validation
const validate = require("../middlewares/validate-middleware");
const signupSchema = require("../validators/auth-validator");
const loginSchema = require("../validators/auth-validator");

router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema),authControllers.register);
router.route("/login").post(validate(loginSchema),authControllers.login);
router.route("/admin-auth").get(authMiddleware, authControllers.adminauth);


module.exports = router


// *-------------------
// old logic
// *-------------------
// router.get("/", (req, res) => {
//   res.status(200).send("Hello Server");
// });

// router.get("/register", (req, res) => {
//   res.status(200).json({ msg: "registration successful" });
// });

// *-------------------
// new logic
// *-------------------

// router.route("/").get((req, res) => {

//     res.status(200).send("Hello Server from auth-router");

// });


// router.route("/register").get((req, res) => {

//     res.status(200).json({ msg: "registration successful from auth-router" });

// });