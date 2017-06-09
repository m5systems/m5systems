'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('tpm', {
		url: '/solutions-and-services/technical-project-management',
		templateUrl: 'js/solutions-and-services/tpm/tpm.template.min.html',
		controller: 'TPMCtrl'
	});
});
