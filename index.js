var express = require('express');

var app = express();

var bodyParser = require('body-parser');
// var nodemailer = require('nodemailer');
// var validator = require('validator');

var contactEmail = require('./js/contactEmail');

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

app.listen(process.env.PORT);

console.log(`Express app running on port ${process.env.PORT}`);
