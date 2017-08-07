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
		from: info.from,
		to: info.to,
		subject: info.subject,
		html: info.content
	};

	transporter.sendMail(options, (err, info) => {
		if (err) {
			console.log(err);
		} else {
			console.log(`Message Sent`);
		}
	});
}

module.exports = {
	sendEmail: (info) => {
		// call internal send function
		return sendWithNodemailer(info);
	}
};
