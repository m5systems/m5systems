'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('network-and-datacenter-virtualization', {
		url: '/solutions-and-services/network-and-datacenter-virtualization',
		templateUrl: 'js/solutions-and-services/network-and-datacenter-virtualization/network-and-datacenter-virtualization.template.min.html',
		controller: 'NetworkAndDatacenterVirtualizationCtrl'
	});
});
