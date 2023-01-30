/*ENV*/
require('dotenv').config()
const express = require('express');
const router = express.Router();

/*NODE MAILER*/
var nodemailer = require('nodemailer');


router.post('/',(req,res,next)=>{

    const {email, message}=req.body
    
    const transporter = nodemailer.createTransport({
        port: 465,               // true for 465, false for other ports
        host: "smtp.gmail.com",
        secure: true, //use TLS
        auth: {
                user: process.env.MYEMAIL,
                pass: process.env.MYPASSMAIL,
        },
        tls:{
            rejectUnauthorized: false
        }
    });

    let mailData= {
        from: email,
        to: process.env.MYEMAIL,
        subject: 'Contact Page',
        text: message
    }
    transporter.sendMail(mailData, (error, result)=>{
        if (error){
            console.log(error)
        }else{
            console.log('mail send!!!')
        }
    })
     res.redirect('/contact')
})

module.exports = router;
