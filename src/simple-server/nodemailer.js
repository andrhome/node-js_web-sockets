/**
 * Nodemailer
 */
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'homandrej@gmail.com',
      password: 'cherryeastar2008'
    }
  })
);

const mailOptions = {
  from: 'homandrej@gmail.com',
  to: 'andrey.homenko@requestum.com',
  subject: 'Sending Email using Node.js',
  text: 'Nodemailer implementation!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  console.log('Email is sent:', info.response);
});