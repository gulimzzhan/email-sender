// Imported required modules
const express = require('express');
const nodemailer = require('nodemailer');

// Created an Express application
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json())

// Route to handle form submission
app.post('/', (req, res) => {
    // Extract form data
    const { recipient, subject, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'sonsuayomin@gmail.com', // Gmail address
            pass: 'rxtnhjhnaglhdrzq' // Gmail password
        }
    });

    // Email content
    const mailOptions = {
        from: 'sonsuayomin@gmail.com', // Sender address
        to: recipient, // Recipient address
        subject: subject,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error sending email'); // Handle error
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully'); // Respond to the client
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
