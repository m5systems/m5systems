'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('cloud-consulting', {
		url: '/cloud-consulting',
		templateUrl: 'js/cloud-consulting/cloud-consulting.template.min.html',
		controller: 'CloudConsultingCtrl'
	});
});
