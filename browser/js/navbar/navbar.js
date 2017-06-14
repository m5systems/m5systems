app.directive('navbar', function($rootScope, $state) {

	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/navbar/navbar.template.min.html',

		link: function (scope) {

			scope.displayLinks = function() {
				document.querySelector('.bottom').classList.toggle('active');
			}

			scope.goToState = function (stateVal) {
				document.querySelector('.bottom').classList.remove('active');
				$state.go(stateVal);
			}
		}
	};
});
