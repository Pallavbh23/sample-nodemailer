const nodemailer = require("nodemailer");
nodemailer.createTestAccount((err, account) => {
  if (err) {
    console.error("Failed to create a testing account");
    console.error(err);
    return process.exit(1);
  }
  let transporter = nodemailer.createTransport(
    {
      service: "gmail",
      auth: {
        user: "jobsespresso.jobs@gmail.com",
        pass: "jobs@2020",
      },
      logger: true,
      debug: false, // include SMTP traffic in the logs
    },
    {
      // default message fields

      // sender info
      from: "JobsEspresso <jobsespresso.jobs@gmail.com>",
      headers: {
        "X-Laziness-level": 1000, // just an example header, no need to use this
      },
    }
  );

  var user = "Pallav";

  // Message object
  let message = {
    // Comma separated list of recipients
    to: "pallavbh23@gmail.com",

    // Subject of the message
    subject: "Welcome to JobsEspresso " + user + "!",

    // HTML body
    html: `<p><b>Hello!</b></p>
        <p>Thanks for Joining JobEspresso, good to have you here!`,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log("Error occurred");
      console.log(error.message);
      return process.exit(1);
    }

    console.log("Message sent successfully!");
    console.log(nodemailer.getTestMessageUrl(info));

    // only needed when using pooled connections
    transporter.close();
  });
});
