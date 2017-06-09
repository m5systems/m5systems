'use strict';

// Register the angular app
const app = angular.module('APP_NAME_HERE', ['ui.router']);

app.config(function($locationProvider, $urlRouterProvider) {
	// allow for real urls and not hashbang urls --> EX: /timer instead of /#timer
	$locationProvider.html5Mode(true);

	// If no valid state is found, redirect the user to a 404 page
	$urlRouterProvider.otherwise('/404');
});

app.run(function ($rootScope) {
	// This brings the window to the top of the page after a state change --> Otherwise the page stays the same distance from the top of the screen as it was on the previous state.
	$rootScope.$on('$stateChangeSuccess', function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
});
