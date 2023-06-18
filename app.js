var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var usersRouter = require('./routes/userRouter');
const houserouter = require('./routes/houseRouter');
const imagerouter = require('./routes/imagerouter');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
app.use('/house', houserouter);
app.use('/images', imagerouter);
// app.use('/users', usersRouter);

// conect to mongodb
mongoose.set('strictQuery', false);
mongoose
  .connect(
    'mongodb+srv://ajb1434:612681775@cluster0.bmydzw6.mongodb.net/betahouse'
  )
  .then(() => console.log('Connected DATABASE!'))
  .catch((error) => console.log(error.message));

// 'mongodb+srv://ajb1434:CLK7IIRE7aDBBJUN@cluster0.bmydzw6.mongodb.net/betahouse'
// mongoose
//   .connect('mongodb://127.0.0.1:27017/BetaHouse')
//   .then(() => {
//     console.log('Connected! mongodb ');
//   })
//   .catch((err) => console.log(err));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;