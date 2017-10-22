const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
require('./models/User');
require('./services/passport');
const passport = require('passport');
mongoose.connect(keys.mongoURI);

const authRoutes = require('./routes/authRoutes');
// it wants to listen  to 5000 on your machine routed through node to express
const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
authRoutes(app);
const PORT = process.env.PORT || 5000;
// heroku will inject port ||5000;
app.listen(PORT);
//AIzaSyAxWYLrEU_YMfuFbMeiiJ_rlNz354iIzBk
//
