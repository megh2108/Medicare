const express = require('express');

const app = express();
const session = require('express-session');
const passport = require("passport");

app.use(session({
	secret: 'medicare123',
	resave: false,
	saveUninitialized: true
  }));

app.use(passport.initialize());
app.use(passport.session());
