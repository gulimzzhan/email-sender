# Email Sender Backend

This is a simple backend application designed to handle sending emails using Node.js, Express.js, and Nodemailer.

## Features

- Accepts email details from a form on the frontend.
- Sends the email using the configured Gmail SMTP server.
- Notifies the user of the status of the email sending process.

## Prerequisites

- Node.js installed on your machine.
- A Gmail account for sending emails (Google Email Account is already provided).

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Usage

1. Start the server by running `npm run dev` or `node app.js` in your terminal.
2. Access the website at [http://localhost:3000](http://localhost:3000).
3. Fill out the email form with the recipient's email, topic, and message.
4. Click the "Send" button to send the email.

## Configuration

- Update the `user` and `pass` fields in `app.js` with your Gmail address and password, respectively.
- Ensure that your Gmail account allows less secure apps to access it. You may need to enable "Allow less secure apps" in your Gmail account settings.

## Files

- `/public/index.html`: Frontend HTML file containing the email form.
- `/public/styles.css`: CSS file for styling the frontend.
- `app.js`: Backend Node.js file containing the server logic.
- `bg.jpg`: Background image for the frontend.

## Note

This application is for educational purposes only and may not be suitable for production use without further security and authentication measures.

## Author
Gulimzhan Orynbassar