const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const logger = require('morgan');
require('./config/db')();
require('dotenv').config();
const bodyParser = require('body-parser');
// const passport = require('passport');

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(passport.initialize());
// app.use(passport.session());

app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log('app running on PORT: ' + PORT);
});
