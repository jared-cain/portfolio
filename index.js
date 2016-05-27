var express = require('express');

var app = express();

var bodyParser = require('body-parser');
// var nodemailer = require('nodemailer');
// var validator = require('validator');

var contactEmail = require('./js/contactEmail');

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req,res,next) {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

app.use(express.static("./public"));

app.post("/contact_email", function(req,res){
    contactEmail.contactEmail(req,res);
});

app.listen(port);

console.log(`Express app running on port ${port}`);
