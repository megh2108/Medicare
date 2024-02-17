const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Authenticate = require("../../middleware/Authenticate");


require('../../db/conn');
const Doctor = require('../../model/Doctor/doctorSchema');

//register
router.post('/doctor-register', async (req, res) => {
    const { dname, demail, dphone,dlno,dspecial, dpassword, dcpassword } = req.body;
    console.log(req.body);

    if (!dname || !demail || !dphone || !dpassword || !dcpassword || !dlno || !dspecial) {
        return res.status(422).json({ error: "Please fill in all required fields." });
    }

    try {
        const doctorExist = await Doctor.findOne({ demail: demail });
        if (doctorExist) {
            return res.status(422).json({ error: "Doctor already exists." });
        }

        else if (dpassword !== dcpassword) {
            return res.status(422).json({ error: "Passwords do not match." });
        }


        const doctor = new Doctor({ dname, demail, dphone,dlno,dspecial, dpassword, dcpassword });

        await doctor.save();

        res.status(201).json({ message: "Doctor registered successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// for login 
// router.post('/doctor-login', async (req, res) => {

//     const { email, password } = req.body;
//     console.log(req.body);

//     if (!email || !password) {
//         return res.status(401).json({ error: "Please filled the data." });
//     }

//     try {

//         const doctorLogin = await Doctor.findOne({ demail: email });
//         console.log("Doctor Login",doctorLogin);


//         if (doctorLogin != null) {

//             const isMatch = await bcrypt.compare(password, doctorLogin.dpassword);

//             if (!isMatch) {

//                 res.status(401).json({ error: "Invalid Credentials." });
//             } else {

//                 const token = await doctorLogin.generateAuthToken();
//                 console.log(token)


//                 res.cookie("jwtoken", token, {
//                     expires: new Date(Date.now() + 25892000000),
//                     httpOnly: true
//                 });

 
//                 return res.status(200).json({ message: "Doctor login successfully" });

//             }

//         } else {
//             res.status(401).json({ error: "Invalid Credentials...   " });
//         }

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error.' });

//     }
// })


router.get('/doctor-logout', (req, res) => {
    console.log(`Hello Doctor Logout`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("Doctor Logout.");
});


module.exports = router;