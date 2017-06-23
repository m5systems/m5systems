'use strict';
const router = require('express').Router();
module.exports = router;

router.post('/formSubmit', (req, res, next) => {
	let info = {};
	info.from = 'm5systems@m5systems.org';
	info.subject = 'New form submission from website';
	info.to = 'sambernheim@gmail.com';
	info.content = `<html><body><p>${req.body.name} would like to get in touch. They can be reached at ${req.body.email}. They had the following message:</p>

		<p>${req.body.message}</p>

		<p><a href='${req.body.website}'>Click here to view their website</a></p></body></html>`;

	const emailFunc = require('./sendEmail.js');

	return emailFunc.sendEmail(info);
});
