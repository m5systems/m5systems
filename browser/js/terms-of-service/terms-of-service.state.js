'use strict';

app.config(function ($stateProvider) {

	$stateProvider.state('terms-of-service', {

		url: '/terms-of-service',
		templateUrl: 'js/terms-of-service/terms-of-service.template.min.html',
		controller: 'TermsCtrl'

	})

});
