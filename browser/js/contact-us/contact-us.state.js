'use strict';

// Register a state called timer
app.config(function($stateProvider) {
	$stateProvider.state('contact-us', {
		url: '/contact-us',
		templateUrl: 'js/contact-us/contact-us.template.min.html',
		controller: 'ContactUsCtrl'
	});
});
