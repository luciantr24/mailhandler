var nodeMailer = require('nodemailer');

function SendEmail(username, password, req){
    return new Promise((resolve, reject) =>{
        let transporter = nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: username,
                pass: password
            } 
        })

        let mailOptions = {
            from : req.body.email.from,
            to: req.body.email.to,
            subject: req.body.email.subject, 
            text: req.body.email.text
        }
    
        transporter.sendMail(mailOptions, (err, info) =>{
            if(err) console.log(err);
            console.log('Email sent: ' + info.response);
        });
    });
}

export default {
    SendEmail
}