require('dotenv').config();

var express = require('express');
import MailHandler from './mailsender';

const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;

const username = process.env.username;
const password = process.env.password;

var app = new express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sendEmail', (req, res) => {
    if(res.body == null)
        return res.Send("Body cannot be null");

    MailHandler.SendEmail(username, password, req)
        .then(res => res.send("Message sent"))
        .catch(ex => console.log(ex))
});

var server = app.listen(PORT, () =>{
    console.log("The server is running on port: " + PORT);
});