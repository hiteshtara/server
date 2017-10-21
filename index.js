const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);

const authRoutes = require('./routes/authRoutes');
// it wants to listen  to 5000 on your machine routed through node to express
const app = express();
authRoutes(app);
const PORT = process.env.PORT || 5000;
// heroku will inject port ||5000;
app.listen(PORT);
//AIzaSyAxWYLrEU_YMfuFbMeiiJ_rlNz354iIzBk
//
