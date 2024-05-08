const User = require("../models/user-model");
const Medicine = require("../models/medicine-model");
const Conatct = require("../models/contact-model");
const Appointment = require("../models/appointment");

const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'meghshah0410@gmail.com',
        pass: 'dlqt mqqp oobu cxok',
    },
});

const home = (req, res) => {

    try {

        res.status(200).json({ msg: "Welcome to our home page" });

    }
    catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {

        const { name, email, phone, password, cpassword, type, licenceno, special, secretkey } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "email already exists" });
        }

        else if (password !== cpassword) {
            // return res.status(422).json({ error: "Passwords do not match." });
            return res.status(400).json({ error: "Passwords do not match." });
        }


        if (type === 'admin' && secretkey !== 'admin') {
            return res.status(400).json({ error: "Invalid secret key for admin registration" });
            // return res.status(403).json({ error: "Invalid secret key for admin registration" });
        }

        const userCreated = await User.create({
            name, email, phone, password, cpassword, type, licenceno, special, secretkey
        });


        if (!userCreated) {
            return res.status(500).json({ message: "Failed to create user" });
        }

        // res.status(201).json({ message: "User registered successfully" });
        res.status(201).json({ msg: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString(), });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });


    }
};

const login = async (req, res) => {
    try {
        const { emails, passwords } = req.body;

        const userExist = await User.findOne({ email: emails });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const isPasswordValid = await userExist.comparePassword(passwords);

        if (isPasswordValid) {
            if (userExist.isValid === 'Active') {

                if (userExist.type === 'doctor') {
                    res.status(201).json({ message: "Doctor Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString(), });

                }
                else if (userExist.type === 'admin') {
                    res.status(202).json({ message: "Admin Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString(), });

                }
                else {
                    res.status(200).json({ message: "Patient Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString(), });
                }
            }
            else {
                res.status(401).json({ message: "You are not authorized till now, when Admin authorized you , you get tha mail" });
            }

        } else {
            res.status(400).json({ message: "Invalid email or passord " });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


const contact = async (req, res) => {
    try {

        const { name, email, subject, message } = req.body;


        const messageCreated = await Conatct.create({
            name, email, subject, message
        });


        if (!messageCreated) {
            return res.status(500).json({ message: "Failed to submit message" });
        }

        // res.status(201).json({ message: "User registered successfully" });
        res.status(201).json({ msg: "Message Submit Successfull" });


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });


    }
};


const adminauth = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);

        if (userData.type === 'admin') {

            return res.status(200).json({ message: `Welcome Admin : ${userData.name} ` });
        } else {
            return res.status(400).json({ message: "You are not Authorized for this page." });
        }
    } catch (error) {
        console.log(` error from user route ${error}`);
    }
};


const appointment = async (req, res) => {
    try {
        // Extract appointment details from request body
        const {
            user,
            firstName,
            middleName,
            lastName,
            age,
            email,
            mobileNumber,
            city,
            gender,
            date,
            doctor,
            time,
            message
        } = req.body;

        // Check if the doctor exists
        const doctorExist = await User.findById(doctor);
        if (!doctorExist) {
            return res.status(400).json({ error: "Doctor not found" });
        }

        

        // Check doctor's availability for the specified date and time
        const existingAppointment = await Appointment.findOne({ doctor, date, 'time.startTime': time.startTime, 'time.endTime': time.endTime });
        if (existingAppointment) {
            return res.status(402).json({ error: "Doctor is not available at the specified date and time" });
        }

        // Create the appointment
        const appointment = await Appointment.create({
            user,
            firstName,
            middleName,
            lastName,
            age,
            email,
            mobileNumber,
            city,
            gender,
            date,
            doctor,
            time,
            message
        });
        
        htmlSendToDoctor = `<h2>HealthEase Platform</h2><br> 
        <h3>Hello ${doctorExist.name}</h3>
        <h3>${firstName} is successfully book appointment with you at ${time.startTime} to ${time.endTime}.</h3> 
        <h3>Please treat patient nicely.</h3> <br>
        <h4>Thanks & Regards</h4> 
        <h4>HealthEase</h4> 
        `;

        
        htmlSendToPatient = `<h2>HealthEase Platform</h2><br> 
        <h3>Hello ${firstName}</h3>
        <h3>You successfully book appointment with ${doctorExist.name} at ${time.startTime} to ${time.endTime}.</h3> 
        <h3>Take treatment form doctor and enjoy.</h3> <br>
        <h4>Thanks & Regards</h4> 
        <h4>HealthEase</h4> 
        `;

        const mailOptionsToDoctor = {
            from: 'meghshah0410@gmail.com',
            to: doctorExist.email,
            subject: 'Acknowledgement of Appointment',
            html: htmlSendToDoctor,
        };

        const mailOptionsToPateint = {
            from: 'meghshah0410@gmail.com',
            to: email,
            subject: 'Acknowledgement of Appointment',
            html: htmlSendToPatient,
        };

        transporter.sendMail(mailOptionsToDoctor, (error, info) => {
            if (error) {
                console.error('Error sending email to doctor:', error);
                return res.status(400).json({ msg: "mail sent error to doctor." });
            } else {
                console.log('Email sent to doctor:', info.response);
            }
            console.log("mail transfer to doctor");
        });

        transporter.sendMail(mailOptionsToPateint, (error, info) => {
            if (error) {
                console.error('Error sending email: to patient', error);
                return res.status(400).json({ msg: "mail sent error to patient." });
            } else {
                console.log('Email sent: to patient', info.response);
            }
            console.log("mail transfer to patient");
        });

        // Return success response
        res.status(201).json({ message: "Appointment created successfully", appointment });

    } catch (error) {
        console.error("Error creating appointment:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


const changepassword = async (req, res) => {
    try {
        const { id, oldPassword, newPassword, reenterNewPassword } = req.body;
        console.log("bodyr",req.body)

        const userExist = await User.findById(id);

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const isOldPasswordValid = await userExist.comparePassword(oldPassword);


        if (!isOldPasswordValid) {
            return res.status(400).json({ message: "Password is not correct." });
        }

        // Check if newPassword matches reenterNewPassword
        if (newPassword !== reenterNewPassword) {
            return res.status(400).json({ message: "Password is not correct." });
        }

        // Hash the new password
        // const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        // const hashedReenterNewPassword = await bcrypt.hash(reenterNewPassword, 10);

        // Update user's password in the database
        userExist.password = newPassword;
        userExist.cpassword = reenterNewPassword;
        
        await userExist.save();

        // Return success message
        return res.status(200).json({ message: "Password changed successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = { home, register, login, contact, adminauth, appointment, changepassword };