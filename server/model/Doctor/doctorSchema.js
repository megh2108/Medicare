const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const doctorSchema = new mongoose.Schema({
    dname: {
        type: String,
        required: true
    },
    demail: {
        type: String,
        required: true
    },
    dphone: {
        type: Number,
        required: true
    },
    dlno: {
        type: String,
        required: true
    },
    dspecial: {
        type: String,
        required: true
    },
    dpassword: {
        type: String,
        required: true
    },
    dcpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

doctorSchema.pre('save', async function (next) {
    if (this.isModified('dpassword')) {
        this.dpassword = await bcrypt.hash(this.dpassword, 12);
        this.dcpassword = await bcrypt.hash(this.dcpassword, 12);
    }
    next();
});

// Generate token
doctorSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};

const Doctor = mongoose.model('DOCTOR', doctorSchema);

module.exports = Doctor;
