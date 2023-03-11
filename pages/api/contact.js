const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "theoccultcorner@gmail.com",
    pass: "Katana805!",
  },
});

export default async function handler(req, res) {
  const data = req.body.data;

  try {
    await transporter.sendMail({
      to: "theoccultcorner@gmail.com",
      from: data.email,
      subject: `You got a new message from ${data.name}`,
      text: `Thanks for the mail.`,
    });

    res
      .status(200)
      .json({ status: "success", message: "Successfully sent your message!" });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Failed to send message!",
    });
  }
}