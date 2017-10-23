const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');
// generates a new application all the route handesrs will be associateed with app.
//second argument is arrow function gets called by express when incoming request hits /
// create new instance of google strategy
// passport use is generate registry .passport make use of google strategy
// googelstrategy need client id and client secret. set up your app with google
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
// write a function to retrieve a blob of json
// make an ajax request use the fetch function
//https://rallycoding.herokuapp.com/api/music_albums
// this traditionall promise chain .then for asynch request
// fetch resolvs to json another promise is returned
//
// now refactor to es6 behind the scenes promise is working
//step one identify the function using async
//mark with asynch
//step 2
// identify all the promises
// add await to each statement that produces promises
async function fetchAlbumsEs6() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
  const json = await res.json();
  console.log(json);
}
function fetchAlbums() {
  fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
