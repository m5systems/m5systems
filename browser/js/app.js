'use strict';

// Register the angular app
const app = angular.module('M5Systems', ['ui.router']);

app.config(function($locationProvider, $urlRouterProvider) {
	// allow for real urls and not hashbang urls --> EX: /timer instead of /#timer
	$locationProvider.html5Mode(true);

	// If no valid state is found, redirect the user to a 404 page
	$urlRouterProvider.otherwise('/404');
});

app.run(function ($rootScope) {
	$rootScope.$on('$stateChangeSuccess', function() {
		// This brings the window to the top of the page after a state change --> Otherwise the page stays the same distance from the top of the screen as it was on the previous state.
		document.body.scrollTop = document.documentElement.scrollTop = 0;

		// After any state change close the mobile navbar
		document.querySelector('.bottom').classList.remove('active');
	});
});
