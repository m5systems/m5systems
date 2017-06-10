'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('staff-augmentation', {
		url: '/solutions-and-services/staff-augmentation',
		templateUrl: 'js/solutions-and-services/staff-augmentation/staff-augmentation.template.min.html',
		controller: 'StaffAugmentationCtrl'
	});
});
