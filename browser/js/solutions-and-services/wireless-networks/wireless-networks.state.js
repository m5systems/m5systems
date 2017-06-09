'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('wireless-networks', {
		url: '/solutions-and-services/wireless-networks',
		templateUrl: 'js/solutions-and-services/wireless-networks/wireless-networks.template.min.html',
		controller: 'WirelessNetworksCtrl'
	});
});
