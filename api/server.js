const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
sgMail.setApiKey('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'); // replace with your SendGrid API Key
app.use(cors());
app.use(bodyParser.json());
app.post('/submit', (req, res) => {
  const { name, mobile, email, message } = req.body;
  const msg = {
    to: 'info@redpositive.in', // recipient email
    from: 'raza1010abbas@gmail.com', // your verified SendGrid email
    subject: 'Contact Form',
    text: `
      Name: ${name}
      Mobile: ${mobile}
      Email: ${email}
      Message: ${message}
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).send('Email sent successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending email');
    });
});
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

