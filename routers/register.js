const express = require('express');
const register = express.Router();
const clientModel = require('../models/client');
const nodemailer = require("nodemailer");


register.post('/',(req,res,next)=>{ 
  clientModel.find({email:req.body.email})
  .then((data)=>{
    if(data.length > 0){
      return res.status(409).json({
        message:'This email is already exists'
      })
    }else{
      clientModel.create(req.body).then((data)=>{
        // Create Verify Token
        let email = data.email;
        let verifyToken = data.valid;

        async function sendEmail (){
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            // host: "smtp-mail.outlook.com",
            service: "hotmail",
            secureConnection: false, // TLS requires secureConnection to be false
            port: 587, // port for secure SMTP
            // tls: {
            //   rejectUnauthorized:false
            // },
            auth: {
                user: 'handsome.boy.195@hotmail.com',
                pass: 'nightlight'
            }
          });

          let mailOptions = {
            from: '"From app" <handsome.boy.195@hotmail.com>',
            to: email,
            subject: "Verify Your Account",
            html: `
            <h2>Welcome to our application</h2>
            <p>Please click the link below to verify your account</p>
            <p>
              <a href="http://localhost:4200/confirm/${verifyToken}/${email}" target="_blank">Verfiy Account</a>
            </p>
            ` 
          }
          // send mail with defined transport object
          let info = await transporter.sendMail(mailOptions);
          console.log("Message sent: %s", info.messageId);
        }

        sendEmail().catch(console.error);

        return res.status(200).json({
          message:'Thanks for register, please verify your email'
        });

      })
    }
  }).catch(next);
});



module.exports = register;
