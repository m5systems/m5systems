'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('aws', {
		url: 'aws-partnership',
        templateUrl: 'js/aws-iframe/aws-iframe.template.min.html',
		controller: 'AwsIframe'
	});
});
