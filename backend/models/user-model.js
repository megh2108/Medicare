const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// Define the User schema
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['patient', 'doctor', 'admin'],
        required: true
    },
    licenceno: {
        type: String,
        required: function () {
            return this.type === 'doctor';
        }
    },
    special: {
        type: String,
        required: function () {
            return this.type === 'doctor';
        }
    },
    secretkey: {
        type: String,
        required: function () {
            return this.type === 'admin';
        }
    },
    isValid: {
        type: String,
        default: 'In-active',
    },
    // isValid: {
    //     type: Boolean,
    //     default: false,
    // },
});

//? secure the password with the bcrypt
userSchema.pre("save", async function () {
    const user = this;
    console.log("actual data ", this);

    if (!user.isModified) {
        return next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        const hashedCpassword = await bcrypt.hash(user.cpassword, saltRound);
        user.password = hashedPassword;
        user.cpassword = hashedCpassword;

        if (user.type === 'admin') {
            user.isValid = 'Active';
        }


    } catch (error) {
        return next(error);
    }
});

// json web token : instance method
userSchema.methods.generateToken = async function () {
    try {

        return jwt.sign({ userId: this._id.toString(), email: this.email, isValid: this.isValid, }, process.env.JWT_SECET_KEY, { expiresIn: "30d", });

    }
    catch (error) {
        console.error("Token Error: ", error);
    }

};

// comparePassword
userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


// define the model or the collection name
const User = new mongoose.model("USER", userSchema);

module.exports = User;