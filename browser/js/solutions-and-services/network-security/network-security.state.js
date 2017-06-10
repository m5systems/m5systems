'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('network-security', {
		url: '/solutions-and-services/network-security',
		templateUrl: 'js/solutions-and-services/network-security/network-security.template.min.html',
		controller: 'NetworkSecurityCtrl'
	});
});
