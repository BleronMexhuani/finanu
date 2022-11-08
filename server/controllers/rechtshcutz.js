var express = require("express");
require("dotenv").config();
const router = express.Router();
const nodemailer = require("nodemailer");

var reschtutz = {

    sendRechtutzEmail: sendRechtutzEmail = async (req, res) => {
        
        const data = req.body;
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        })

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" 123123', // sender address
            to: "bleronmexhuani1@gmail.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
    }
}


module.exports = reschtutz