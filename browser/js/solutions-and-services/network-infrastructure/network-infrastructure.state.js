'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('network-infrastructure', {
		url: '/solutions-and-services/network-infrastructure',
		templateUrl: 'js/solutions-and-services/network-infrastructure/network-infrastructure.template.min.html',
		controller: 'NetworkInfrastructureCtrl'
	});
});
