const nodemailer = require("nodemailer");

const sendEmail = (purpose, email, subject, values) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const contactHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8" />
            <title>New Contact Form Submission</title>
            <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                padding: 20px;
            }
            .container {
                border: 1px solid #ddd;
                padding: 20px;
                background-color: #f9f9f9;
                max-width: 600px;
                margin: auto;
            }
            h2 {
                color: #555;
            }
            .field {
                margin-bottom: 15px;
            }
            .label {
                font-weight: bold;
            }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Z-Comm Form Submission</h2>
                <div class="field">
                    <span class="label">Name:</span> ${values[0]}
                </div>
                <div class="field">
                    <span class="label">Email:</span> ${values[1]}
                </div>
                <div class="field">
                    <span class="label">Phone Number:</span> ${values[2]}
                </div>
                <div class="field">
                    <span class="label">Service:</span> ${values[3]}
                </div>
                <div class="field">
                    <span class="label">Message:</span>
                    <p>${values[4]}</p>
                </div>   
            </div>
            <footer>
                <p style="text-align: center; font-size: 12px; color: #999;">
                    This email was sent from Z-Comm on ${values[5]}. If you did not request this, please ignore it.
                </p>
            </footer>
        </body>
        </html>
        `;

        const resetPasswordHtml = `
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
            <p>Hello ${values[0] || "User"},</p>
            <p>We received a request to reset your password. Click the button below to set a new one:</p>
            <a href="${values[1]}" class="button">Reset Password</a>
            <p>If you didn't request a password reset, you can safely ignore this email.</p>
            <div class="footer">
                <p>— Your Zuse Team</p>
            </div>
            </div>
        </body>
        </html>
        `;

        let template;
        if (purpose === "contact") {
            template = contactHtml;
        } else if (purpose === "reset-password") {
            template = resetPasswordHtml;
        } else {
            console.log("Invalid purpose");
            return;
        }

        transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: Array.isArray(email) ? email.join(', ') : email,
            subject: subject,
            html: template
        }, (err, info) => {
            if (err) {
                console.log(err);
                console.log("email not sent")
            } else {
                console.log(info);
                console.log("email sent successfully");
            }
        });
    } catch (error) {
        console.log(error, "something went wrong before sending email");
    };
};

module.exports = sendEmail;