const nodemailer = require("nodemailer");



const sendEmail = (email, subject, text) => {
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

        const template = `
            <div id="email-template-container" style="width: 100%; height: 100%; background-color: #f4f4f4; padding: 20px;">
                <div id="email-template" style="width: 100%; max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 5px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <h1></h1>
                    <h1>${subject}</h1>
                    <p>${text}</p>
                </div>    
            </div>
        `;

        transporter.sendMail({
            from: process.env.EMAIL_FROM,
            to: email,
            subject: subject,
            html: template
        }, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
                console.log("email sent successfully");
            }
        });
    } catch (error) {
        console.log(error, "email not sent");
    };
};

module.exports = sendEmail;