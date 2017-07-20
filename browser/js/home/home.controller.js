'use strict';

app.controller('HomeCtrl', function($scope) {

	$scope.chooseImage = function() {
		let randomNum = Math.floor(Math.random() * 10);
		let arrayOfImageUrls = ['background-1.jpg', 'background-2.jpg', 'background-3.jpg', 'background-4.jpg', 'background-5.jpg', 'background-6.jpg', 'background-7.jpg', 'background-8.jpg', 'background-9.jpg', 'background-10.jpg'];
		let background = document.querySelector('.home__header');

		background.style.backgroundImage = `url(images/random-background-images/${arrayOfImageUrls[randomNum]})`;
	};

	$scope.chooseImage();

});
