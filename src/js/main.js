var workSiteClient = angular.module('workSiteClient', ['ngRoute']);

workSiteClient.config (
	function ($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'Views/index.html', controller: 'indexController'})
		.otherwise({
			redirectTo: '/'
		});
	}
);
