const path = require('path');
const nodemailer = require('nodemailer');
const ses = require('nodemailer-ses-transport');
const config = require('./config.json');


function sendWithNodemailer(info) {
	const transporter = nodemailer.createTransport(ses({
		accessKeyId: config.accessKeyId,
		secretAccessKey: config.secretAccessKey
	}));

	const options = {
		from: 'info@m5systems.com',
		to: 'sambernheim@gmail.com',
		subject: info.subject,
		text: info.content
	};

	transporter.sendMail(options, (err, info) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Message Sent: ${info.response}`);
		}
	});
}

module.exports = {
	sendEmail: (info) => {
		// call internal send function
		return sendWithNodemailer(info);
	}
};
