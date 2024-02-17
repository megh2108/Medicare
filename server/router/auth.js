const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Authenticate = require("../middleware/Authenticate");

require('../db/conn');
const User = require('../model/User/userSchema');
const Doctor = require('../model/Doctor/doctorSchema');

// for login 
router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body);

        if (!email || !password) {
            return res.status(400).json({ error: "Please filled the data." });
        }


        const userLogin = await User.findOne({ email: email });
        console.log("User Login: ", userLogin);

        if (userLogin == null) {
            const doctorLogin = await Doctor.findOne({ demail: email });
            console.log("User Login: ", doctorLogin);

            if (doctorLogin != null) {

                const isMatch = await bcrypt.compare(password, doctorLogin.dpassword);

                if (!isMatch) {

                    res.status(400).json({ error: "Invalid Credentials." });
                } else {

                    const token = await doctorLogin.generateAuthToken();
                    console.log(token)

                    res.cookie("jwtoken", token, {
                        expires: new Date(Date.now() + 25892000000),
                        httpOnly: true
                    });

                    return res.status(200).json({ message: "Doctor login successfully" });
                }
            } else {
                res.status(400).json({ error: "Invalid Credentials...   " });
            }
        } else if (userLogin != null) {

            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (!isMatch) {

                res.status(400).json({ error: "Invalid Credentials." });
            } else {

                const token = await userLogin.generateAuthToken();
                console.log(token)

                res.cookie("jwtoken", token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true,
                    sameSite: 'None',
                    secure: true
                });

                return res.status(201).json({ message: "User login successfully" });
            }

        } else {
            res.status(400).json({ error: "Invalid Credentials...   " });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error.' });

    }
})


router.get('/add-appointment', Authenticate, async (req, res) => {
    console.log(`Hello User`);

    const userId = req.rootUser._id;
    console.log(`UserID inn auth`, userId);


    const userEmail = req.rootUser.email;
    console.log(`UserEmail inn auth`, userEmail);

    const user = await User.findOne({ email: userEmail });

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.send(req.rootUser);
});

router.get('/', (req, res) => {
    res.send(`Hello world from server`);
})

module.exports = router;