const User = require("../models/user-model");

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

        console.log(req.body);
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

        const userExist = await User.findOne({ email : emails});

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // const user = await bcrypt.compare(password, userExist.password);
        const isPasswordValid = await userExist.comparePassword(passwords);

        if (isPasswordValid) {
            if (userExist.isValid == true) {

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

const adminauth = async (req,res) => {
    try {
        const userData = req.user;
        console.log(userData);

        if(userData.type === 'admin'){

            return res.status(200).json({ message: `Welcome Admin : ${userData.name} ` });
        }else{
            return res.status(400).json({ message: "You are not Authorized for this page." });
        }
      } catch (error) {
        console.log(` error from user route ${error}`);
      }
}

module.exports = { home, register, login, adminauth };