import * as nodemailer from 'nodemailer';
import * as Handlebars from 'handlebars';
import * as fs from 'fs';
import * as path from 'path';
const __dirname = path.resolve();
import Mustache from 'mustache'

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    posrt: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'thegirheritageresort@gmail.com',
        pass: 'bzaluunxdqxhupmf'
    }
});


const sendEMail = async (name, email, mobile, message) => {
    const filePath = path.join(__dirname, '/src/assets/templates/verifyaccount.html');
    const source = fs.readFileSync(filePath, 'utf-8').toString();
    var data = {
        username: name,
        email: email,
        mobile: mobile,
        message: message,
    };
    var output = Mustache.render(source, data)

    var mailOptions = {
        from: 'vikram', // Sender address
        to: 'thegirheritageresort@gmail.com',         // List of recipients
        subject: 'Inquiry', // Subject line
        html: output
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info);
        }
    });



};

export default sendEMail;