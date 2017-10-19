const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();
// generates a new application all the route handesrs will be associateed with app.
//second argument is arrow function gets called by express when incoming request hits /
// create new instance of google strategy
// passport use is generate registry .passport make use of google strategy
// googelstrategy need client id and client secret. set up your app with google
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('accessToken', accessToken);
      console.log('refresh Token', refreshToken);
      console.log('profile', profile);
    }
  )
);
// hey passport authenticte this user who is coming to this route with strategy google
// sttring google denotes use google strategy
// scope denotes hey google  i need to read cutomer profile and email
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);
app.get('/auth/google/callback', passport.authenticate('google'));
// it wants to listen  to 5000 on your machine routed through node to express
const PORT = process.env.PORT || 5000;
// heroku will inject port ||5000;
app.listen(PORT);
//AIzaSyAxWYLrEU_YMfuFbMeiiJ_rlNz354iIzBk
//
