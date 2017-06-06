'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('testimonials', {
		url: '/testimonials',
		templateUrl: 'js/testimonials/testimonials.template.min.html',
		controller: 'TestimonialsCtrl'
	});
});
