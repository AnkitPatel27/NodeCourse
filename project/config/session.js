const session = require('express-session');
const cookieParser = require('cookie-parser');

const sessionConfig = {
  secret: 'your-secret-key', // Replace with a strong secret key
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
};

module.exports = {
  sessionConfig,
  sessionMiddleware: session(sessionConfig),
  cookieParser: cookieParser()
};