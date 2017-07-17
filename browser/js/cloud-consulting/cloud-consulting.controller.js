'use strict';

app.controller('CloudConsultingCtrl', function($scope) {

	$scope.chooseImage = function() {
		let randomNum = Math.floor(Math.random() * 7);
		let arrayOfImageUrls = ['background-1.jpg', 'background-2.jpg', 'background-3.jpg', 'background-4.jpg', 'background-5.jpg', 'background-6.jpg', 'background-7.jpg'];
		let background = document.querySelector('.cloud-consulting__header');

		background.style.backgroundImage = `url(images/cloud-consulting-background/${arrayOfImageUrls[randomNum]})`;
	};

	$scope.chooseImage();
});
