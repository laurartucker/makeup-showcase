var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/makeup')
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

var apiRouter = require('./routes/product');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/makeup-stash')));
app.use('/', express.static(path.join(__dirname, 'dist/makeup-stash')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status)
});

module.exports = app;



// curl -i -X POST -H "Content-Type: application/json" -d '{ "website" : "sephora.com", "category" : "Tools & Brushes", "sub_category" : "Value & Gift Sets", "brand" : "SEPHORA COLLECTION", "image_urls" :"http://www.sephora.com/productimages/sku/s1504919-main-grid.jpg" , "affiliate_link" : "http://www.sephora.com/look-color-in-the-eye-brush-capsule-P379208", "images" : [ { "url" : "http://www.sephora.com/productimages/sku/s1504919-main-grid.jpg", "path" : "full/536385973a5bbc76703001f86e85392d9858c121.jpg" ], "price" : "$22.00", "name" : "Look Color In The Eye Brush Capsule" }' localhost:3000/api
// curl -i -X POST -H "Content-Type: application/json" -d '{ "isbn":"123442123, 97885654453443","title":"Learn how to build modern web application with MEAN stack","author": "Didin J.","description":"The comprehensive step by step tutorial on how to build MEAN (MongoDB, Express.js, Angular 5 and Node.js) stack web application from scratch","published_year":"2017","publisher":"Djamware.com" }' localhost:3000/api