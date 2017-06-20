const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

function send(mail) {
	const request = sg.emptyRequest({
		method: 'POST',
		path: '/v3/mail/send',
		body: mail.toJSON()
	});

	return sg.API(request, (err, res) => {
		if (err) {
			console.log("error response received: ", err);
		}
	});
}

module.exports = {
	sendEmail: (info) => {
		// Get all the information stored in the proper format
		const fromEmail = new helper.Email(info.from);
		const subject = info.subject;
		const toEmail = new helper.Email(info.to);
		const content = new helper.Content('text/html', info.content);

		// create a new `mail` object used by sendgrid
		const mail = new helper.Mail(fromEmail, subject, toEmail, content);

		// call internal send function
		return send(mail);
	}
};
