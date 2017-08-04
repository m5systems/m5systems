const path = require('path');
const aws = require('aws-sdk'); // load aws sdk

const config = path.join(__dirname, 'config.json');

aws.config.loadFromPath(config); // load aws config
const ses = new aws.SES({apiVersion: '2010-12-01'}); // load AWS SES

function send(mail) {

	let to = []; // send to list
	mail.to.forEach(email => {
		to.push(email);
	});

	const params = {
		Destination: {
			ToAddresses: to
		},
		Message: {
			Body: {
				Text: {
					Charset: "UTF-8",
					Data: mail.content
				}
			},
			Subject: {
				Charset: "UTF-8",
				Data: mail.subject
			}
		},
		Source: mail.from // this must relate to a verified SES account
	};


	ses.sendEmail(params, function(err, data) {
		if(err) throw err;
		console.log('Email sent:');
		console.log(data);
	});
}

module.exports = {
	sendEmail: (info) => {

		// call internal send function
		return send(info);
	}
};
