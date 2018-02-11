'use strict';

// Register a state called timer
app.config(function($stateProvider) {
	$stateProvider.state('pdf', {
		url: '/pdf',
		templateUrl: 'js/pdf/pdf.template.min.html'
	});
});

