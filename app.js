var express = require('express');
var pug = require('pug');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var forms = require('./routes/forms');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/',routes);
app.use('/users',users);
app.use('/forms',forms);

app.post('/',function(req,res){
  var firstname = req.body.txtFirstName;
  var lasrname = req.body.txtLastName;

  var fullname = '<a href="/">Home</a>' + 
  '<br/>' +
  'Hello :' + firstname + '' + lasrname;

  res.send(fullname);
});

module.exports = app;