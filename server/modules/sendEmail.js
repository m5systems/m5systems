const path = require('path');
const aws = require('aws-sdk'); // load aws sdk
aws.config.loadFromPath(path.resolve('../../config.json')); // load aws config
const ses = new aws.SES({apiVersion: '2010-12-01'}); // load AWS SES

function send(mail) {

	let to = []; // send to list
	mail.to.forEach(email => {
		to.push(email);
	})

	const from = mail.from; // this must relate to a verified SES account

	// this sends the email
	// @todo - add HTML version
	ses.sendEmail( {
		Source: from,
		Destination: { ToAddresses: to },
		Message: {
			Subject:Source {
				Data: mail.subject;
			},
			Body: {
				Text: {
					Data: mail.content,
				}
			}
		}
	},
	function(err, data) {
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
