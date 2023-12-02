require('dotenv').config();
const nodemailer = require('nodemailer'); 
const htmlContent = require('./htmlContent');

const sendEmail = async (options) => {
  // Creating a Transporter
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT * 1,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
  try {   
    const mailOptions = {
      from: 'Greg Udogu <bootspace.io>',
      to: options.email,
      subject: options.subject,
      html: htmlContent(options.name, options.confirmationLink, options.title, options.message)
    };

    await transport.sendMail(mailOptions);
  }
  catch(error) {
    console.log(error);
    return error.message;
  }
}

module.exports = sendEmail;