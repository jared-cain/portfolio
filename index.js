var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var nodemailer = require('nodemailer');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req,res,next) {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

app.use(express.static("./public"));

app.post("/contact_email", function (req, res) {
    console.log("Email started....");
    var name = req.body.contact_name;

    // WRITE LOGIC FOR SENDING EMAIL
    // VALIDATE EMAIL ADDRESS, NAME, AND MESSAGE
    // ADD TO EMAILED DB
    // SEND EMAIL LOGIC

    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'hotmale776@gmail.com',
            pass: 'wzziwrwidhagtper'
        }
    });

    var text = req.body.contact_message;
    var fromEmail = req.body.contact_email;

    var mailOptions = {
        from: fromEmail,
        to: 'jared.cain77@gmail.com',
        subject: `Portfolio Contact Form ${fromEmail}`,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if(error){
            console.log(error);
            res.status(400).send({ message: "We could not process your email at this time, try again later" });
        } else {
            console.log(`Message sent: ${info.response}`);
            res.status(200).send({ message: `Thank you ${name} for contacting us!`});
        }
    })

    console.log("Email Finished!");

})

app.listen(3000);

console.log("Express app running on port 3000");
