const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');


const express = require('express');


const app = express();

// for google OAuth
const cors = require('cors');

// configure env directory
dotenv.config({ path: './config.env'});

const PORT = process.env.PORT;


// connection with database
require('./db/conn');

app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
})


app.use(express.json());


// for routing API
app.use(require('./router/auth'));
app.use(require('./router/Userauth/userauth'));
app.use(require('./router/Doctorauth/doctorauth'));
// app.use(require('./router/Googleauth/googleauth'));


require('./passport');
require('./session');



app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})