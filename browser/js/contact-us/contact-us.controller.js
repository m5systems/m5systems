'use strict';

app.controller('ContactUsCtrl', function($scope, $http) {
	$scope.submitted = false;

	$scope.getInfo = function(user) {
		const name = user.name;
		const email = user.email;
		const website = user.website;
		const message = user.message;

		$http({
			method: 'POST',
			url: '/api/formSubmit',
			data: {
				"name": name,
				"email": email,
				"website": website,
				"message": message
			}
		}).then(function() {
			$scope.submitted = true;
		});
	};

});
