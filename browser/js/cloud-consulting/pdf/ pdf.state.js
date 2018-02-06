'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('pdffile', {
		url: '/pdf',
		templateUrl: 'js/cloud-consulting/pdf/pdf.template.min.html'
	});
});
