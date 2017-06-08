'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('migration-to-cloud', {
		url: '/solutions-and-services/migration-to-cloud',
		templateUrl: 'js/solutions-and-services/migration-to-cloud/migration-to-cloud.template.min.html',
		controller: 'MigrationToCloudCtrl'
	});
});
