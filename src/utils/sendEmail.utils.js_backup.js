import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    posrt: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'facebookon7@gmail.com',
        pass: 'xwcyrmvlqvjuqspt'
    }
});

const sendEMail = async (name, email, token) => {
    fs.readFile(path.resolve() + `/src/assets/templates/verifyaccount.html`, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        data = data.replace(/###URL###/g, process.env.ACTIVATE_ACCOUNT_BASE_URL)

        var mailOptions = {
            from: 'vikram', // Sender address
            to: 'info.vikramahir@gmail.com',         // List of recipients
            subject: 'Inquiry', // Subject line
            html: data
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err)
            } else {
                console.log(info);
            }
        });
    });
};

export default sendEMail;
