var list = document.querySelectorAll('.ps-container');
for (var i = 0; i < list.length; i++) {
	new PerfectScrollbar(list[i]);
}

angular.module("app", [])
	.controller("AppController", AppController)
	.controller("ExternalPlayerControlsController", ExternalPlayerControlsController)
	.controller("PlaylistModifyController", PlaylistModifyController)
	.controller("TopAlbumsController", TopAlbumsController)
	.controller("ContextMenuController", ContextMenuController);

function AppController($scope) {
	function getSetting(index) {
		return vars.settings[index];
	}

	$scope.utils = {
		getSetting: getSetting
	};

};

function ExternalPlayerControlsController($scope) {
};

function PlaylistModifyController($scope) {
};

function ContextMenuController($scope) {
};

function TopAlbumsController($scope, $http) {
	$scope.topAlbums = [];
	$http({
		method: 'GET',
		url: '/data.json'
	}).then(function successCallback(response) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.topAlbums = response.data;
	}, function errorCallback(response) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});
};