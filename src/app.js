const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

//importing config
const config = require('./config');
// importing routes
const breedRoutes = require('./routes/breed');

// settings
app.set('port', process.env.PORT || 3100);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: config.host,
  user: config.user,
  password: config.password,
  port: config.port,
  database: config.database
}, 'single'));
app.use(express.urlencoded({extended: false}));

// routes
// app.use('/', customerRoutes);
app.use('/api', breedRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
