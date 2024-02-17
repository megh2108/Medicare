const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Authenticate = require("../../middleware/Authenticate");


require('../../db/conn');
const User = require('../../model/User/userSchema');

//register
router.post('/user-register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    console.log(req.body);

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill in all required fields." });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "User already exists." });
        }

        else if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords do not match." });
        }


        const user = new User({ name, email, phone, password, cpassword });

        await user.save();

        res.status(201).json({ message: "User registered successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// for login 
// router.post('/user-login', async (req, res) => {

//     const { email, password } = req.body;
//     console.log(req.body);

//     if (!email || !password) {
//         return res.status(400).json({ error: "Please filled the data." });
//     }

//     try {

//         const userLogin = await User.findOne({ email: email });
//         console.log("User Login: ",userLogin);


//         if (userLogin != null) {

//             const isMatch = await bcrypt.compare(password, userLogin.password);

//             if (!isMatch) {

//                 res.status(400).json({ error: "Invalid Credentials." });
//             } else {

//                 const token = await userLogin.generateAuthToken();
//                 console.log(token)

               
//                 res.cookie("jwtoken", token, {
//                     expires: new Date(Date.now() + 25892000000),
//                     httpOnly: true
//                 });

//                 return res.status(201).json({ message: "User login successfully" });
//             }

//         } else {
//             res.status(400).json({ error: "Invalid Credentials...   " });
//         }

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal server error.' });

//     }
// })


router.get('/user-logout', (req, res) => {
    console.log(`Hello User Logout`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send("User Logout.");
});


module.exports = router;