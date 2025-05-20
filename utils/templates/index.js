const resetPasswordTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Password Reset</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        color: #333;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        background-color: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: auto;
      }
      h2 {
        color: #333;
      }
      .button {
        display: inline-block;
        padding: 12px 20px;
        margin-top: 20px;
        background-color: #007BFF;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
      }
      .footer {
        margin-top: 30px;
        font-size: 0.9em;
        color: #777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h2>Password Reset Request</h2>
      <p>Hello ${userName || "User"},</p>
      <p>We received a request to reset your password. Click the button below to set a new one:</p>
      <a href="${resetLink}" class="button">Reset Password</a>
      <p>If you didn't request a password reset, you can safely ignore this email.</p>
      <div class="footer">
        <p>— Your Zuse Team</p>
      </div>
    </div>
  </body>
</html>
`