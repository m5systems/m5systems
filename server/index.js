'use strict';

const path = require('path');
const chalk = require('chalk');
const compression = require('compression');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(compression());

const port = process.env.PORT || 1337;
const cacheTime = 1209600000; // 2 weeks
const env = require('./env');
app.set('env', env);

// folder to serve public files --> css, img, etc
// Folders inside public and the files inside them are also available --> Works recursively
app.use(express.static(path.join(__dirname, 'public'), {maxAge: cacheTime}));

/*
 * Serve all the files in ../browser/ staticlly as well --> Needed since the
 * html template files must be served statically so that they can be accessed
 * by the browser on a GET request
 */
app.use(express.static(path.join(__dirname, '../browser/')));

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/api/formSubmit', (req, res, next) => {
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

// For any get request return the index.html file
app.get('/*', function (req, res) {

	/* Log all get requests for files that don't have a `.` in them -->
	 * Excludes images and other files not helpful for development
	 */
	if (!req.originalUrl.includes('.')){
		console.log(chalk.yellow("GET: " + req.originalUrl));
	}

	/* Return the index.html file and hand over the routing to Angular's UI-Router */
	res.sendFile(path.join(__dirname, '/index.html'));
});

// Listen on the port for incoming requests
app.listen(port, function() {
	console.log(chalk.white('Listening to port:', port));
	console.log(chalk.blue('Environment is:', process.env.NODE_ENV));
});
