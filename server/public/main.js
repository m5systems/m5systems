'use strict';

// Register the angular app

const app = angular.module('APP_NAME_HERE', ['ui.router']);

app.config(function ($locationProvider, $urlRouterProvider) {
	// allow for real urls and not hashbang urls --> EX: /timer instead of /#timer
	$locationProvider.html5Mode(true);

	// If no valid state is found, redirect the user to a 404 page
	$urlRouterProvider.otherwise('/404');
});

app.run(function ($rootScope) {
	// This brings the window to the top of the page after a state change --> Otherwise the page stays the same distance from the top of the screen as it was on the previous state.
	$rootScope.$on('$stateChangeSuccess', function () {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
});

'use strict';

// Register a state called timer
app.config(function ($stateProvider) {
	$stateProvider.state('404', {
		url: '/404',
		templateUrl: 'js/404/404.template.min.html'
	});
});

'use strict';

app.controller('AboutCtrl', function ($scope) {});

'use strict';

// Register a state called timer
app.config(function ($stateProvider) {
	$stateProvider.state('about-us', {
		url: '/about-us',
		templateUrl: 'js/about-us/about-us.template.min.html',
		controller: 'AboutCtrl'
	});
});

'use strict';

app.controller('ContactUsCtrl', function ($scope) {});

'use strict';

// Register a state called timer
app.config(function ($stateProvider) {
	$stateProvider.state('contact-us', {
		url: '/contact-us',
		templateUrl: 'js/contact-us/contact-us.template.min.html',
		controller: 'ContactUsCtrl'
	});
});

'use strict';

app.controller('HomeCtrl', function ($scope) {});

'use strict';

// Register a state called timer
app.config(function ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'js/home/home.template.min.html',
		controller: 'HomeCtrl'
	});
});

app.directive('navbar', function ($rootScope, $state) {

	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/navbar/navbar.template.min.html',

		link: function (scope) {}
	};
});

'use strict';

app.controller('SolutionsAndServicesCtrl', function ($scope) {});

'use strict';

// Register a state called timer
app.config(function ($stateProvider) {
	$stateProvider.state('solutions-and-services', {
		url: '/solutions-and-services',
		templateUrl: 'js/solutions-and-services/solutions-and-services.template.min.html',
		controller: 'SolutionsAndServicesCtrl'
	});
});

'use strict';

app.controller('TestimonialsCtrl', function ($scope) {});

'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('testimonials', {
		url: '/testimonials',
		templateUrl: 'js/testimonials/testimonials.template.min.html',
		controller: 'TestimonialsCtrl'
	});
});

'use strict';

app.controller('CloudConsultingCtrl', function ($scope) {});

'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('cloud-consulting', {
		url: '/solutions-and-services/cloud-consulting',
		templateUrl: 'js/solutions-and-services/cloud-consulting/cloud-consulting.template.min.html',
		controller: 'CloudConsultingCtrl'
	});
});

'use strict';

app.controller('NetworkAndDatacenterVirtualizationCtrl', function ($scope) {});

'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('network-and-datacenter-virtualization', {
		url: '/solutions-and-services/network-and-datacenter-virtualization',
		templateUrl: 'js/solutions-and-services/network-and-datacenter-virtualization/network-and-datacenter-virtualization.template.min.html',
		controller: 'NetworkAndDatacenterVirtualizationCtrl'
	});
});

'use strict';

app.controller('TPMCtrl', function ($scope) {});

'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('tpm', {
		url: '/solutions-and-services/technical-project-management',
		templateUrl: 'js/solutions-and-services/tpm/tpm.template.min.html',
		controller: 'TPMCtrl'
	});
});

'use strict';

app.controller('WirelessNetworksCtrl', function ($scope) {});

'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('wireless-networks', {
		url: '/solutions-and-services/wireless-networks',
		templateUrl: 'js/solutions-and-services/wireless-networks/wireless-networks.template.min.html',
		controller: 'WirelessNetworksCtrl'
	});
});
//# sourceMappingURL=main.js.map
