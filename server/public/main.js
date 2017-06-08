'use strict';

// Register the angular app

const app = angular.module('APP_NAME_HERE', ['ui.router']);

app.config(function ($locationProvider, $urlRouterProvider) {
	// allow for real urls and not hashbang urls --> EX: /timer instead of /#timer
	$locationProvider.html5Mode(true);

	// If no valid state is found, redirect the user to a 404 page
	$urlRouterProvider.otherwise('/404');
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

app.controller('MigrationToCloudCtrl', function ($scope) {});

'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('migration-to-cloud', {
		url: '/solutions-and-services/migration-to-cloud',
		templateUrl: 'js/solutions-and-services/migration-to-cloud/migration-to-cloud.template.min.html',
		controller: 'MigrationToCloudCtrl'
	});
});