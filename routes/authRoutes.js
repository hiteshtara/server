const passport = require('passport');
// hey passport authenticte this user who is coming to this route with strategy google
// sttring google denotes use google strategy
// scope denotes hey google  i need to read cutomer profile and email
module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.get(
    '/auth/google/callback',

    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/current_user', (req, res) => {
    console.log('user', req.user);
    res.send(req.user);
  });
};
