const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");

const options = {
  auth: {
    api_key: process.env.SENDGRID_PASSWORD,
  },
};

const client = nodemailer.createTransport(sgTransport(options));

export default function handler(req, res) {
  if (req.method === 'POST') {
    const email = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Booking from Website",
      html: `<div>
          <div><strong>Escort:</strong> ${req.body.escort}<br/></div>
          <div><strong>Customer Name:</strong> ${req.body.customername}<br/></div>
          <div><strong>Type:</strong> ${req.body.incallOutcall}<br/></div>
          <div><strong>Phone:</strong> ${req.body.phone}<br/></div>
          <div><strong>Email:</strong> ${req.body.email}<br/></div>
          <div><strong>Duration:</strong> ${req.body.duration}<br/></div>
          <div<strong>Date and Time:</strong> ${dateFormat(req.body.dateTime, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</div>
          <div><strong>Duration:</strong> ${req.body.duration}<br/></div>
          <div><strong>special Instructions:</strong> ${req.body.specialInstructions}<br/></div>
        </div>`,
    };

    client.sendMail(email, function (err, info) {
      if (err) {
        return res.status(500).send(err);
      } else {
        res.json({ success: true, info });
      }
    });
  } 
}
