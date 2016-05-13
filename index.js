var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req,res,next) {
    console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
    next();
});

app.use(express.static("./public"));

app.post("/contact_email", function (req, res) {
    console.log("emailed");
    var name = req.body.contact_name;
    res.status(200).send({ message: `Thank you ${name} for contacting us!`});
})

app.listen(3000);

console.log("Express app running on port 3000");
