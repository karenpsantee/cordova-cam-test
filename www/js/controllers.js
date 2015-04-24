angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	function takePicture() {
		console.log('in picture function');
	  	navigator.camera.getPicture(function(imageURI) {
	  		console.log(imageURI);

	    	// imageURI is the URL of the image that we can use for
	    	// an <img> element or backgroundImage.

	  	}, function(err) {
	  		console.log(err);
	    	// Ruh-roh, something bad happened

	  	});
	}
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
