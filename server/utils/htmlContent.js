const htmlContent = (name, confirmationLink) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Confirmation</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 30px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #512da8;
        }

        p {
            color: #757575;
        }

        .confirmation-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #512da8;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
        }
    </style>
  </head>

  <body>
      <div class="container">
          <h1>Email Confirmation</h1>
          <p>Dear ${name},</p>
          <p>Thank you for signing up! Please click the button below to confirm your email address:</p>

          <a href="${confirmationLink}" class="confirmation-button">Confirm Email</a>

          <p>If you did not sign up for our service, you can safely ignore this email.</p>

          <p>Best regards,<br>Your Company Name</p>
      </div>
  </body>
  </html>
`;
return htmlContent; // Don't forget to return the HTML content
}
module.exports = htmlContent;
