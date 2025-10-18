const path = require('path');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const multer = require('multer');

const app = express();
app.use(cors({
  origin: 'http://localhost:4800',
  credentials: true,
}));
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());
const users = [
  { id: 1, username: 'admin', password: 'admin123', age: '20', role: 'admin'},
  { id: 2, username: 'student', password: 'student123', age: '30', role: 'student'},
  { id: 3, username: 'guest', password: 'guest123', age: '40', role: 'guest'},
];
passport.use(new LocalStrategy((username, password, done) => {
  const user = users.find((u) => u.username === username);
  if (!user || user.password !== password) {
    return done(null, false, { message: 'Incorrect username or password.' });
  }
  return done(null, user);
}));
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  const user = users.find((u) =>  u.id === id);
  done(null, user);
});
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    // console.log("REQ.USER INSIDE AUTHROIZE:", req.user);
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Access denied" });
    }
    next();
  };
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Math.floor(Math.random() * (99 - 0 + 1)) + 0;
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});
const uploadToDisk = multer({ storage: storage });
app.post("/login", passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login successful', role: req.user.role });
});
app.post('/upload', authorizeRoles('admin', 'guest'), uploadToDisk.single('file'), (req, res) => {
  // console.log(req.file);
  res.send({
    message: 'File uploaded successfully',
    filename: req.file.filename,
    file: req.file,
    size: req.file.size,
  });
});
app.get('/api/uploads', authorizeRoles('admin', 'student'), (req, res) => {
  const filename = req.query.filename;
  const filepath = path.join(__dirname, 'uploads', filename);
  res.download(filepath, filename, (err) => {
  });
});
app.listen(3000, () => {
  console.log(`Server has started at http://localhost:3000`);
});