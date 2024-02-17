const mongoose = require('mongoose');

const userGoogleAuthSchema = new mongoose.Schema({
    googleId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},{timestamps:true});

// userSchemass.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword = await bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// });

// Generate token
// userSchemass.methods.generateAuthToken = async function () {
//     try {
//         let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({ token: token });
//         await this.save();
//         return token;
//     } catch (err) {
//         console.log(err);
//     }
// };

const Usergoogleschema = mongoose.model('USER', userGoogleAuthSchema);

module.exports = Usergoogleschema;
