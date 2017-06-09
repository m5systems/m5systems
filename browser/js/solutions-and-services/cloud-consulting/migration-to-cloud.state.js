'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('cloud-consulting', {
		url: '/solutions-and-services/cloud-consulting',
		templateUrl: 'js/solutions-and-services/cloud-consulting/cloud-consulting.template.min.html',
		controller: 'CloudConsultingCtrl'
	});
});
