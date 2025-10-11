const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.username)
})
passport.deserializeUser((username, done) => {
  done(null, { id: 1, username: 'ken' })
})
passport.use(new LocalStrategy((username, password, done) => {
  if (username === 'ken' && password === 'vice') {
    return done(null, { id: 1, username: 'ken' });
  }
  return done(null, false);
}));

app.post("/login", passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful' })
})

app.listen(3000, () => {
  console.log(`Server has started at http://localhost:3000`);
});