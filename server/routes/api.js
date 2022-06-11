const router = require("express").Router();
const nodeMailer = require("nodemailer");
require("dotenv").config();

router.get("/", (req, res) => {
  res.send("You have reached the API");
});

// POST route from contact form
router.post('/contact', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PASSWORD,
    }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: `New message from ${req.body.your_email}`,
    text: `${req.body.user_name} says: \n ${req.body.user_message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      // res.render('contact-failure') // Show a page indicating failure
      console.log(error);
      res.send("Error sending the mail")
    }
    else {
      // res.render('contact-success') // Show a page indicating success
      res.redirect('/public');
    }
  })
})



module.exports = router;