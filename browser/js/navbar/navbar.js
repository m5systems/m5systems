app.directive('navbar', function($rootScope, $state) {

	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/navbar/navbar.template.min.html',

		link: function (scope) {

			scope.displayLinks = function() {
				document.querySelector('.bottom').classList.toggle('active');
			}
		}
	};
});
