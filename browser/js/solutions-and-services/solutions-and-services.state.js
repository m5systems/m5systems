'use strict';

// Register a state called timer
app.config(function($stateProvider) {
	$stateProvider.state('solutions-and-services', {
		url: '/solutions-and-services',
		templateUrl: 'js/solutions-and-services/solutions-and-services.template.min.html',
		controller: 'SolutionsAndServicesCtrl'
	});
});
