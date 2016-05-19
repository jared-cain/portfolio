var nodemailer = require('nodemailer');
var validator = require('validator');

module.exports = {
    contactEmail: function(req,res){
        console.log("Email started....");
        var name = validator.escape(req.body.contact_name.trim());
        var fromEmail = validator.normalizeEmail(req.body.contact_email.trim());
        var text = validator.escape(req.body.contact_message.trim());

        console.log(typeof name);
        console.log(typeof text);

        // VALIDATE EMAIL ADDRESS, NAME,
        // ADD TO EMAILED DB

        var transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: 'hotmale776@gmail.com',
                pass: process.env.GPASS
            }
        });


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
        });

        console.log("Email Finished!");
    }
}
