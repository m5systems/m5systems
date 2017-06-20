'use strict';

app.controller('ContactUsCtrl', function($scope) {
	$scope.getInfo = function(user) {
		const name = user.name;
		const email = user.email;
		const website = user.website;
		const message = user.message;
	};
});
