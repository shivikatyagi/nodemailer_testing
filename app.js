require('dotenv').config();

const nodemailer = require('nodemailer');


 let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
 });
 
const mailOptions = {
    from: process.env.SENDER_EMAIL_USERNAME, 
    to: process.env.RECIPIENT_EMAIL_USERNAME, 
    cc: process.env.SENDER_EMAIL_USERNAME,
    bcc: process.env.SENDER_EMAIL_USERNAME,
    subject: 'Node Mailer', 
    text: 'Hii .....This is nodemailer testing mail ', 
};

transport.sendMail(mailOptions, function(err, info) {
   if (err) {
     console.log(err)
   } else {
     console.log(info);
   }
});
