'use strict';

app.config(function ($stateProvider) {

	$stateProvider.state('privacy-policy', {

		url: '/privacy-policy',
		templateUrl: 'js/privacy-policy/privacy-policy.template.min.html',
		controller: 'PrivacyCtrl'

	})

});
